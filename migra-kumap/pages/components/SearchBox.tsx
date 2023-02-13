import * as S from "@/styles/index/SearchBox";
import { useRecoilState } from "recoil";
import {
  modalBuildingNameState,
  myModalState,
  searchFullState,
  walkTimeModalState,
} from "../constants/atom";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SearchBox() {
  const { data: session, status } = useSession<any>({ required: false });
  const [walkTimeModal, setWalkTimeModal] = useRecoilState(walkTimeModalState);
  const [name, setName] = useRecoilState(modalBuildingNameState);
  const [searchFull, setSearchFull] = useRecoilState(searchFullState);
  const [isActive, setIsActive] = useRecoilState(myModalState);
  const onSearchFull = () => {
    setSearchFull(true);
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  const showWalkTimeModal = () => {
    setIsActive(false);
    setWalkTimeModal(true);
  };

  return (
    <>
      <S.top_modal_container>
        <S.first_search_modal
          onClick={onSearchFull}
          className={isActive ? "activeSearch" : undefined}
        >
          {name === "" ? (
            <>
              {/* <S.searchScope className="material-icons">search</S.searchScope> */}
              <S.serachScope src="/modal/search.png"></S.serachScope>
              <S.searchFont1>건물/수업명을 검색하세요</S.searchFont1>
              {/* <S.kumapIcon src="/modal/kumapIcon.png" /> */}
            </>
          ) : (
            <S.searchFont2>{name}</S.searchFont2>
          )}
        </S.first_search_modal>
        <S.myContainer>
          <S.myButtonModal className={isActive ? "activeModal" : undefined}>
            <S.columnFlex>
              <S.mySelect className={isActive ? "activeSelect" : undefined}>
                <S.myOption value="korean">한국어</S.myOption>
                <S.myOption value="english">영어</S.myOption>
              </S.mySelect>
              <S.modalP
                className={isActive ? "active" : undefined}
                onClick={showWalkTimeModal}
              >
                도보이동시간 확인하기
              </S.modalP>
              {session ? (
                <>
                  <S.modalP className={isActive ? "active" : undefined}>
                    시간표 짜러가기
                  </S.modalP>
                  <S.modalP
                    className={isActive ? "active" : undefined}
                    onClick={() => {
                      signOut();
                    }}
                  >
                    로그아웃
                  </S.modalP>
                </>
              ) : (
                <>
                  <S.modalP
                    className={isActive ? "active" : undefined}
                    onClick={() => {
                      signIn("kakao");
                    }}
                  >
                    카카오 로그인
                  </S.modalP>
                  <S.modalP className={isActive ? "active" : undefined}>
                    회원가입
                  </S.modalP>
                </>
              )}
            </S.columnFlex>
          </S.myButtonModal>
          <S.myButton
            className={isActive ? "active" : undefined}
            onClick={toggleActive}
          >
            MY
          </S.myButton>
        </S.myContainer>
      </S.top_modal_container>
    </>
  );
}
