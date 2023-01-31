import * as S from "@/styles/index/SearchFull";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { allBuildingState, searchFullState } from "../constants/atom";

export default function SearchFull() {
  const [buildingList, setBuildingList] = useRecoilState(allBuildingState);
  const [searchFull, setSearchFull] = useRecoilState(searchFullState);

  const dataFetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/building_list`)
      .then(function (res) {
        const { data } = res;
        console.log("searchfull", data);
        const buliding_info = JSON.parse(data.building);
        console.log("buliding_info", buliding_info);
        setBuildingList(buliding_info);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);
  const closeSearchFull = () => {
    setSearchFull(false);
  };
  const filter = () => {};
  return (
    <>
      <S.wrapper>
        <S.header>
          <S.closeBtn onClick={closeSearchFull} src="/modal/close_button.png" />
          <h2>목적지 검색</h2>
          <S.inputHere
            onKeyUp={filter}
            type="text"
            placeholder="목적지를 입력해주세요."
          />
        </S.header>
        <S.choice>
          {buildingList?.map((building) => (
            <S.itemDiv key={building["pk"]}>
              <S.buildName>{building["fields"]["building_name"]}</S.buildName>
            </S.itemDiv>
          ))}
        </S.choice>
      </S.wrapper>
    </>
  );
}
