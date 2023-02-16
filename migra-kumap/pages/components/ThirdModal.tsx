import * as S from "@/styles/index/ThirdModal";
import {
  fromModalPkState,
  modalBuildingNameState,
  modalPkState,
  modalThirdState,
} from "../constants/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ThirdModal() {
  const [modalThird, setModalThird] = useRecoilState(modalThirdState);
  const [fromBuildName, setFromBuildName] = useState("");
  const [fromBuildLat, setFromBuildLat] = useState("");
  const [fromBuildLon, setFromBuildLon] = useState("");
  const [toBuildName, setToBuildName] = useState("");
  const [toBuildLat, setToBuildLat] = useState("");
  const [toBuildLon, setToBuildLon] = useState("");
  const [fromModalPk, setFromModalPk] = useRecoilState(fromModalPkState);
  const [modalPk, setModalPk] = useRecoilState(modalPkState);
  const [name, setName] = useRecoilState(modalBuildingNameState);
  const [walkTime, setWalkTime] = useState("");

  const closeModal = () => {
    setModalThird(false);
    setName("");
    setFromModalPk(null);
  };

  const getTimeFromSk = async () => {
    if (
      fromBuildLon != "" &&
      fromBuildLat != "" &&
      toBuildLat != "" &&
      toBuildLat != undefined &&
      fromBuildLat != undefined &&
      toBuildLon != ""
    ) {
      const fromBuildLonStr = fromBuildLon.toString();
      const fromBuildLatStr = fromBuildLat.toString();
      const toBuildLatStr = toBuildLat.toString();
      const toBuildLonStr = toBuildLon.toString();
      const headers = {
        appKey: process.env.NEXT_PUBLIC_SK_APIKEY,
      };
      await axios({
        method: "POST",
        headers: headers,
        url: "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json&callback=result",
        data: {
          startX: fromBuildLonStr,
          startY: fromBuildLatStr,
          endX: toBuildLonStr,
          endY: toBuildLatStr,
          reqCoordType: "WGS84GEO",
          resCoordType: "EPSG3857",
          startName: "출발지",
          endName: "도착지",
        },
      })
        .then((response: any) => {
          let resultData = response.data.features;
          let times = (resultData[0].properties.totalTime / 60).toFixed(0);
          setWalkTime(times);
        })
        .catch((err) => {
          console.log("에러 in skAPI", err);
        });
    }
  };

  const firstDataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/${modalPk}`)
      .then(function (res) {
        const { data } = res;
        // console.log("toBuilding", data);
        const { name, building_lat, building_lon } = data;
        // console.log("in firstDataFetch toBuild", building_lat);
        setToBuildLat(building_lat);
        setToBuildLon(building_lon);
        setToBuildName(name);
        // console.log("in firstDataFetch toBuild", toBuildLat);
      })
      .catch((err) => {
        console.log("에러", err);
      });

    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/${fromModalPk}`
      )
      .then(function (res) {
        const { data } = res;
        // console.log("fromBuilding", data);
        const { name, building_lat, building_lon } = data;
        // console.log("in firstDataFetch fromBuild", building_lat);
        setFromBuildLat(building_lat);
        setFromBuildLon(building_lon);
        setFromBuildName(name);
        // console.log("in firstDataFetch fromBuild", fromBuildLat);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  useEffect(() => {
    firstDataFetch();
  }, []);

  useEffect(() => {
    getTimeFromSk();
  }, [toBuildLat, fromBuildLat, toBuildLon, fromBuildLon]);

  return (
    <>
      <S.ModalContainer>
        <S.ModalCloseBtn src="modal/close_button.png" onClick={closeModal} />
        <S.ModalH3>이동시간 확인</S.ModalH3>
        <S.fromBuildToBuild>
          <S.thirdModalSpan>출발지:{fromBuildName}</S.thirdModalSpan>
          <S.arrowImg src="modal/arrow.png" />
          <S.thirdModalSpan>목적지:{toBuildName}</S.thirdModalSpan>
        </S.fromBuildToBuild>
        <S.buttonMain>
          <S.runningImg src="modal/running.png" />
          <S.thirdModalSpan>도보 예상시간:{walkTime}분</S.thirdModalSpan>
        </S.buttonMain>
        <S.elseButton onClick={closeModal}>다른 출발지 지정하기</S.elseButton>
        <S.elseButton2 href="https://www.google.com/maps/">
          상세 이동경로 확인하기
        </S.elseButton2>
      </S.ModalContainer>
    </>
  );
}
