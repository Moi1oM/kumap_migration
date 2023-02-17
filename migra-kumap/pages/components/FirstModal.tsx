import * as S from "@/styles/index/firstModalStyle";
import { useRecoilState } from "recoil";
import {
  modalState,
  modalLatState,
  modalLonState,
  modalPkState,
  modalSecondState,
  modalBuildingNameState,
  modalThirdState,
  clickedBuildingState,
  isFMarkerClicked,
} from "@/pages/constants/atom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function FirstModal() {
  const [clicekdBuilding, setclickedBuilding] =
    useRecoilState(clickedBuildingState);
  // console.log("확인-----", clicekdBuilding);

  const router = useRouter();
  const [modal, setModal] = useRecoilState(modalState);
  const [modalFirst, setModalFirst] = useRecoilState(modalState);
  const [modalSecond, setModalSecond] = useRecoilState(modalSecondState);
  const [modalThird, setModalThird] = useRecoilState(modalThirdState);
  const [isFMarkerClicekd, setFMarkerclicked] =
    useRecoilState(isFMarkerClicked);

  const onClickClose = () => {
    setName("");
    setModal(!modal);
    setModalPk(0);
    setFMarkerclicked(false);
  };
  const [modalPk, setModalPk] = useRecoilState(modalPkState);
  const [name, setName] = useRecoilState(modalBuildingNameState);
  const dataFetch = async () => {
    // console.log("hi", modalPk);
    // console.log(
    //   `${process.env.NEXT_PUBLIC_API_SERVER_URL}/detail_ajax/${modalPk}`
    // );
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/v1/buildings/${modalPk}`)
      .then(function (res) {
        // console.log("----&&&&&&&$$$------", res);
        // console.log(res.data.name);
        setName(res.data.building_name_ko);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);
  useEffect(() => {
    dataFetch();
  }, [modalPk]);

  const onEntrance = () => {
    router.push(`/entrance/${modalPk}`);
  };
  const onFacility = () => {
    router.push(`/facility/${modalPk}`);
  };
  const toSecondModal = () => {
    setModalFirst(false);
    setModalSecond(true);
  };
  return (
    <>
      <S.ModalContainer>
        <S.ModalCloseBtn src="/modal/close_button.png" onClick={onClickClose} />
        <S.ModalH3>{name}</S.ModalH3>
        {/* <S.MainBtn onClick={toSecondModal}>목적지 설정</S.MainBtn> */}
        <S.rowFlext>
          <S.ElseBtn onClick={onEntrance}>
            <S.ElseBtnImg src="/modal/door.png" />
            <S.ElseBtnText>출입구 확인</S.ElseBtnText>
          </S.ElseBtn>
          <S.ElseBtn onClick={onFacility}>
            <S.ElseBtnImg src="/modal/fac.png" />
            <S.ElseBtnText>부대시설</S.ElseBtnText>
          </S.ElseBtn>
        </S.rowFlext>
      </S.ModalContainer>
    </>
  );
}
