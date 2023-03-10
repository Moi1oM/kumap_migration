import axios from "axios";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

import styled from "styled-components";
import * as S from "styles/index/style";

import {
  allBuildingState,
  AllFacilityState,
  cateBuildingState,
  IsChoiceLoaded,
  isFMarkerClicked,
  modalSecondState,
  modalState,
  modalThirdState,
  walkTimeModalState,
} from "@/pages/constants/atom";
import { NoFallbackError } from "next/dist/server/base-server";

interface propsType {
  name: string;
  category: string;
  isActive: boolean;
  handleCate: any; // 함수 props 타입은 ...?
  iconpath: string;
}

export default function CateBtn({
  name,
  category,
  isActive,
  handleCate,
  iconpath,
}: propsType) {
  const [buildingList, setBuildingList] = useRecoilState(allBuildingState);
  const [cateBuilding, setCateBuilding] = useRecoilState(cateBuildingState);

  const [facilities, setFacilities] = useRecoilState(AllFacilityState);
  const [isChosen, setisChosen] = useRecoilState(IsChoiceLoaded);

  /*-- 모달 관리 --*/
  const [modalFirst, setModalFirst] = useRecoilState(modalState);
  const [modalSecond, setModalSecond] = useRecoilState(modalSecondState);
  const [modalThird, setModalThird] = useRecoilState(modalThirdState);
  const [walkTimeModal, setWalkTimeModal] = useRecoilState(walkTimeModalState);
  const [isFMarkerClicekd, setFMarkerClicekd] =
    useRecoilState(isFMarkerClicked);

  /*-- 데이터 받아오기 --*/

  const dataFetch1 = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/all`)
      .then(function (res) {
        const { data } = res;
        // console.log(data);
        // console.log(data[0]["latitude"]);
        // console.log(data[0]["longitude"]);
        setBuildingList(data);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  const dataFetch2 = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/facilities`)
      .then(function (res) {
        const { data } = res;
        // console.log(data);
        setFacilities(data);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  useEffect(() => {
    dataFetch1();
    dataFetch2();
  }, []);

  /*-- 선택된 카테고리에 맞게 건물 필터링 후 반환 --*/
  const filterCate = (facilityList: any, choice: string) => {
    //카테고리에 맞는 시설 필터링
    const temp = facilityList.filter(
      (item: any) => item.facility_category === choice
    );
    console.log("활성화된 카테고리의 시설들", temp);

    //해당 시설들이 있는 건물pk 배열
    let facility_in: Array<number> = [];
    //시설들이 있는 층수 배열
    let facility_loc: Array<number> = [];
    //해당 건물 담는 배열
    let selected_buildings: any = [];

    for (let i in temp) {
      facility_in.push(temp[i]["id"]);
      let floor = temp[i]["facility_loc"];

      if (floor.includes("층")) {
        let hint = floor.indexOf("층");
        if (floor.includes("지하")) {
          //지하N층이면
          facility_loc.push(-1 * Number(floor[hint - 1]));
        } else {
          facility_loc.push(Number(floor[hint - 1]));
        }
      } else {
        facility_loc.push(0); //예외처리
      }
    }

    console.log(facility_loc);
    facility_in = Array.from(new Set(facility_in));
    //console.log("중복 없이 필터링 확인", facility_in);

    //pk기준으로 필터링
    for (let i in facility_in) {
      buildingList.map((item: any) => {
        if (item["id"] === facility_in[i]) {
          selected_buildings = selected_buildings.concat(item);
        }
      });
    }

    console.log(selected_buildings, choice, "그 시설들이 위치한 건물");
    setCateBuilding(selected_buildings);
  };

  return (
    <S.CategoryBtn
      isActive={isActive}
      onClick={() => {
        handleCate(category);
        filterCate(facilities, category);
        setisChosen(true);

        setModalFirst(false);
        setModalSecond(false);
        setModalThird(false);
        setWalkTimeModal(false);

        setFMarkerClicekd(false);
      }}
    >
      <S.CategoryImg src={iconpath} isActive={isActive} />
      {name}
    </S.CategoryBtn>
  );
}
