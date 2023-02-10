import {
  AllBuilding,
  allBuildingState,
  AllFacilityState,
  IsChoiceLoaded,
} from "@/pages/constants/atom";
import { Building, Facility, buildings, facilities } from "@/src/data";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import * as S from "../styles/index/style";
import build from "next/dist/build";

// type functionA = (param: string) => string;

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
  const [facilities, setFacilities] = useRecoilState(AllFacilityState);
  const [isChosen, setisChosen] = useRecoilState(IsChoiceLoaded);

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

  /* 카테고리 버튼에 따라 마커 띄우는 함수 */
  const filterCate = (facilityList: any, choice: string) => {
    //버튼에서 활성화된 카테고리에 해당하는 ""시설"" 객체 담은 배열
    const temp = facilityList.filter(
      (item: any) => item.fields.category === choice
    );
    console.log(temp, "활성화된 카테고리의 시설 객체를 담은 배열");
    // 그 시설들이 소속되어 있는 ""건물"" 객체 배열
    const selected_buildings: any = [];

    for (let i in temp) {
      buildingList.map((item: any) => {
        if (item["pk"] === temp[i]["fields"]["building_id"]) {
          selected_buildings.push(item);
        }
      });
    }

    console.log(selected_buildings, choice, "그 시설들이 위치한 건물");
    // setBuildingData(selected_buildings);
    setBuildingList(selected_buildings);
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
