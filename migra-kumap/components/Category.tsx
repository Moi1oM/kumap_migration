import { useEffect, useState } from "react";
import { All } from "@/pages/constants/atom";
import { facilities, buildings, Building, Facility } from "@/src/data";
import { useRecoilState } from "recoil";
import * as S from "../styles/index/style";
import CateBtn from "./CateBtn";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export default function Category({ parentFunction }: any) {
  const [activeCate, setActiveCate] = useRecoilState<string>(All);

  return (
    <>
      <header>
        <h3>카테고리 실험</h3>
      </header>
      <S.CategoryBox>
        <article className="categories">
          {/* <CateBtn
            name="All"
            category="All"
            isActive={activeCate === "All" ? true : false}
            handleCate={setActiveCate}
            iconpath="/category/basic.png"
          /> */}
          <CateBtn
            name="카페"
            category="cafe"
            isActive={activeCate === "cafe" ? true : false}
            handleCate={setActiveCate}
            iconpath="/category/coolicon.png"
          />
          <CateBtn
            name="스터디"
            category="lounge"
            isActive={activeCate === "lounge" ? true : false}
            handleCate={setActiveCate}
            iconpath="/category/loungeicon.png"
          />
          <CateBtn
            name="식당"
            category="restaurant"
            isActive={activeCate === "restaurant" ? true : false}
            handleCate={setActiveCate}
            iconpath="/category/restauranticon.png"
          />
          <CateBtn
            name="원스톱"
            category="one-stop"
            isActive={activeCate === "one-stop" ? true : false}
            handleCate={setActiveCate}
            iconpath="/category/coolicon.png"
          />
          <CateBtn
            name="책반납기"
            category="book_return"
            isActive={activeCate === "book_return" ? true : false}
            handleCate={setActiveCate}
            iconpath="/category/coolicon.png"
          />
          <CateBtn
            name="프린터"
            category="printer"
            isActive={activeCate === "printer" ? true : false}
            handleCate={setActiveCate}
            iconpath="/category/coolicon.png"
          />
          <CateBtn
            name="ATM"
            category="ATM"
            isActive={activeCate === "ATM" ? true : false}
            handleCate={setActiveCate}
            iconpath="/category/coolicon.png"
          />
        </article>
      </S.CategoryBox>
    </>
  );
}
