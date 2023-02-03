import { AllBuilding, IsChoiceLoaded } from "@/pages/constants/atom";
import { Building, Facility, buildings, facilities } from "@/src/data";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import * as S from "../styles/index/style";

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
  const [buildingdata, setBuildingData] =
    useRecoilState<Building[]>(AllBuilding);
  const [isChosen, setisChosen] = useRecoilState(IsChoiceLoaded);

  /* 카테고리 버튼에 따라 마커 띄우기 */

  const filterCate = (facilitylist: Facility[], choice: string) => {
    //버튼에서 활성화된 카테고리에 해당하는 ""시설"" 객체 담은 배열
    const temp = facilitylist.filter((item) => item.category === choice);
    //console.log(temp, "활성화된 카테고리의 시설 객체를 담은 배열")

    // 그 시설들이 소속되어 있는 ""건물"" 객체 배열
    const selected_buildings: Building[] = [];

    for (let i in temp) {
      buildings.map((item) => {
        if (item.name === temp[i].building) {
          selected_buildings.push(item);
        }
      });
    }

    console.log(selected_buildings, choice, "그 시설들이 위치한 건물");
    setBuildingData(selected_buildings);
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
