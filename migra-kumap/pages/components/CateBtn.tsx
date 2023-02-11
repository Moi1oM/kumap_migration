import axios from "axios";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

import styled from "styled-components";
import * as S from "../../styles/index/style";

import {
  allBuildingState,
  AllFacilityState,
  cateBuildingState,
  IsChoiceLoaded,
} from "@/pages/constants/atom";

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

  /*-- 데이터 받아오기 --*/
  const api_urls = [
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/building_list`,
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/facility_list`,
  ];

  const requests = api_urls.map((url) => axios.get(url));
  const dataFetch = async () => {
    axios.all(requests).then((res) => {
      res.forEach((item) => {
        if (item.data.building) {
          const building_info = JSON.parse(item.data.building);
          console.log(building_info);
          setBuildingList(building_info);
        }
        if (item.data.facility) {
          const facility_info = JSON.parse(item.data.facility);
          console.log(facility_info);
          setFacilities(facility_info);
        }
      });
    });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  /*-- 선택된 카테고리에 맞게 건물 필터링 후 반환 --*/
  const filterCate = (facilityList: any, choice: string) => {
    //카테고리에 맞는 시설 필터링
    const temp = facilityList.filter(
      (item: any) => item.fields.category === choice
    );
    //console.log('활성화된 카테고리의 시설들', temp);

    //해당 시설들이 있는 건물pk 배열
    let facility_in: Array<number> = [];
    //해당 건물 담는 배열
    let selected_buildings: any = [];

    for (let i in temp) {
      facility_in.push(temp[i]["fields"]["building_id"]);
    }

    facility_in = Array.from(new Set(facility_in));
    //console.log("중복 없이 필터링 확인", facility_in);

    //pk기준으로 필터링
    for (let i in facility_in) {
      buildingList.map((item: any) => {
        if (item["pk"] === facility_in[i]) {
          selected_buildings = selected_buildings.concat(item);
        }
      });
    }

    //console.log(selected_buildings, choice, "그 시설들이 위치한 건물");
    setCateBuilding(selected_buildings);
  };

  return (
    <S.CategoryBtn
      isActive={isActive}
      onClick={() => {
        handleCate(category);
        filterCate(facilities, category);
        setisChosen(true);
      }}
    >
      <S.CategoryImg src={iconpath} />
      {name}
    </S.CategoryBtn>
  );
}
