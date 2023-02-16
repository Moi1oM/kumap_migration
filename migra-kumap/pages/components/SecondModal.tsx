import * as S from "@/styles/index/secondModalStyle";
import { useRecoilState } from "recoil";
import {
  fromModalPkState,
  modalBuildingNameState,
  modalLatState,
  modalLonState,
  modalPkState,
  modalSecondState,
  modalThirdState,
  secondSearchState,
} from "../constants/atom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SecondModal() {
  const [name, setName] = useRecoilState(modalBuildingNameState);
  const [modalSecond, setModalSecond] = useRecoilState(modalSecondState);
  const [modalThird, setModalThird] = useRecoilState(modalThirdState);
  const [secondSearchFull, setSecondSearchFull] =
    useRecoilState(secondSearchState);
  const [fromModalPk, setFromModalPk] = useRecoilState(fromModalPkState);
  const [fromBuildName, setFromBuildName] = useState("");
  const closeModal = () => {
    setName("");
    setModalSecond(false);
    setFromModalPk(null);
  };
  const [modalLat, setModalLat] = useRecoilState(modalLatState);
  const [modalLon, setModalLon] = useRecoilState(modalLonState);
  const [modalPk, setModalPk] = useRecoilState(modalPkState);

  const fromlatlon = { lat: 37.587988, lon: 127.03059 };
  const toThirdModal = () => {
    // console.log(modalPk, fromModalPk);
    if (modalPk != fromModalPk) {
      // console.log("길찾기 api를 호출합니다.");
      setModalSecond(false);
      setModalThird(true);
    }
  };

  const onSetSecondSearch = () => {
    // console.log("hihihihi");
    setSecondSearchFull(true);
  };

  const fromNameDetail = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/${fromModalPk}`
      )
      .then(function (res) {
        const { data } = res;
        const { name } = data;
        setFromBuildName(name);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  useEffect(() => {
    fromNameDetail();
  }, [fromModalPk]);

  return (
    <>
      <S.ModalContainer>
        <S.ModalCloseBtn src="modal/close_button.png" onClick={closeModal} />
        <S.ModalH3>이동경로 검색</S.ModalH3>
        <S.AddressP>도보 기준 이동경로 및 시간을 계산합니다</S.AddressP>
        <S.button_loc onClick={onSetSecondSearch}>
          {fromModalPk === null ? (
            <>
              <S.loc_img src="/modal/location.png" />
              <S.SecondSpan>출발지를 입력해주세요</S.SecondSpan>
            </>
          ) : (
            <>
              <S.loc_img src="/modal/location.png" />
              <S.SecondSpan>출발지: {fromBuildName}</S.SecondSpan>
            </>
          )}
        </S.button_loc>
        <S.button_loc>
          <S.loc_img src="/modal/location.png" />
          <S.SecondSpan>목적지: {name}</S.SecondSpan>
        </S.button_loc>
        <S.MainBtn onClick={toThirdModal}>이동경로 검색</S.MainBtn>
      </S.ModalContainer>
    </>
  );
}
