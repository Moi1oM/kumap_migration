import * as S from "@/styles/index/walkTimeModal";
import {
  fromModalPkState,
  modalPkState,
  secondSearchState,
  walkTimeModalState,
  walkToBuildPkState,
  walkToSearchFullState,
} from "../constants/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WalkTimeModal() {
  const [walkTimeModal, setWalkTimeModal] = useRecoilState(walkTimeModalState);
  const [fromModalPk, setFromModalPk] = useRecoilState(fromModalPkState);
  const [secondSearchFull, setSecondSearchFull] =
    useRecoilState(secondSearchState);
  const [modalPk, setModalPk] = useRecoilState(walkToBuildPkState);
  const [toSearchFull, setToSearchFull] = useRecoilState(walkToSearchFullState);

  const [fromBuildName, setFromBuildName] = useState("");
  const [toBuildName, setToBuildName] = useState("");
  const [walkTime, setWalkTime] = useState("");
  const [botArrow, setBotArrow] = useState(false);

  const [fromBuildLat, setFromBuildLat] = useState("");
  const [fromBuildLon, setFromBuildLon] = useState("");
  const [toBuildLat, setToBuildLat] = useState("");
  const [toBuildLon, setToBuildLon] = useState("");

  const onClickClose = () => {
    setWalkTimeModal(false);
    setFromModalPk(null);
    setModalPk(null);
    setWalkTime("");
  };

  const onSetSecondSearch = () => {
    // console.log("hihihihi");
    setSecondSearchFull(true);
  };

  const onSetToSearch = () => {
    setToSearchFull(true);
  };

  const fromNameDetail = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/${fromModalPk}`
      )
      .then(function (res) {
        const { data } = res;
        const { name, building_lat, building_lon } = data;
        setFromBuildLat(building_lat);
        setFromBuildLon(building_lon);
        setFromBuildName(name);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  const toNameDetail = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/${modalPk}`)
      .then(function (res) {
        const { data } = res;
        const { name, building_lat, building_lon } = data;
        setToBuildLat(building_lat);
        setToBuildLon(building_lon);
        setToBuildName(name);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  const getTimeFromSk = async () => {
    const fromBuildLonStr = fromBuildLon.toString();
    const fromBuildLatStr = fromBuildLat.toString();
    const toBuildLatStr = toBuildLat.toString();
    const toBuildLonStr = toBuildLon.toString();
    const headers = {
      appKey: process.env.NEXT_PUBLIC_SK_APIKEY,
    };
    setBotArrow(true);
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
  };

  useEffect(() => {
    toNameDetail();
  }, [modalPk]);

  useEffect(() => {
    fromNameDetail();
  }, [fromModalPk]);

  useEffect(() => {
    if (modalPk != null && fromModalPk != null && modalPk != fromModalPk) {
      setWalkTime("");
      setBotArrow(false);
      getTimeFromSk();
    }
  }, [toBuildName, fromBuildName]);

  return (
    <S.ModalContainer>
      <S.ModalCloseBtn src="/modal/close_button.png" onClick={onClickClose} />
      <S.AddressP>도보 기준 이동경로 및 시간을 계산합니다</S.AddressP>
      <S.button_loc onClick={onSetSecondSearch}>
        <S.loc_img src="/modal/location.png" />
        {fromModalPk === null ? (
          <S.SecondSpan>출발지를 입력해주세요</S.SecondSpan>
        ) : (
          <S.SecondSpan>출발지: {fromBuildName}</S.SecondSpan>
        )}
      </S.button_loc>
      <S.button_loc onClick={onSetToSearch}>
        <S.loc_img src="/modal/location.png" />
        {modalPk === null ? (
          <S.SecondSpan>도착지를 입력해주세요</S.SecondSpan>
        ) : (
          <S.SecondSpan>도착지: {toBuildName}</S.SecondSpan>
        )}
      </S.button_loc>
      {botArrow && <S.bottomArrow src="/modal/bottomArrow.png"></S.bottomArrow>}
      {walkTime === "" ? (
        <></>
      ) : (
        <>
          <S.WalkTimeSpan>도보 예상시간: {walkTime}분</S.WalkTimeSpan>
        </>
      )}
    </S.ModalContainer>
  );
}
