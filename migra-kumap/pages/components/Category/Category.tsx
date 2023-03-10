import CateBtn from "./CateBtn";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { All } from "@/pages/constants/atom";
import * as S from "styles/index/style";

export default function Category() {
  const [activeCate, setActiveCate] = useRecoilState<string>(All);

  return (
    <S.CategoryBox>
      {/* <article className="categories"> */}
      {/* <CateBtn
            name="All"
            category="All"
            isActive={activeCate === "All" ? true : false}
            handleCate={setActiveCate}
            iconpath="/category/basic.png"
          /> */}
      <CateBtn
        name="카페"
        category="café"
        isActive={activeCate === "café" ? true : false}
        handleCate={setActiveCate}
        iconpath="/category/caféicon.png"
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
        iconpath="/category/one-stopicon.png"
      />
      <CateBtn
        name="책반납기"
        category="book_return"
        isActive={activeCate === "book_return" ? true : false}
        handleCate={setActiveCate}
        iconpath="/category/book_returnicon.png"
      />
      <CateBtn
        name="프린터"
        category="printer"
        isActive={activeCate === "printer" ? true : false}
        handleCate={setActiveCate}
        iconpath="/category/printericon.png"
      />
      <CateBtn
        name="ATM"
        category="ATM"
        isActive={activeCate === "ATM" ? true : false}
        handleCate={setActiveCate}
        iconpath="/category/ATMicon.png"
      />
      {/* </article> */}
    </S.CategoryBox>
  );
}
