import * as S from "@/styles/index/firstModalStyle";
import { useRecoilState } from "recoil";
import {
  modalState,
  modalLatState,
  modalLonState,
  modalPkState,
  modalSecondState,
  modalBuildingNameState,
} from "@/pages/constants/atom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function FirstModal() {
  const router = useRouter();
  const [modal, setModal] = useRecoilState(modalState);
  const [modalFirst, setModalFirst] = useRecoilState(modalState);
  const [modalSecond, setModalSecond] = useRecoilState(modalSecondState);
  const onClickClose = () => {
    setName("");
    setModal(!modal);
    setModalPk(0);
  };
  const [modalPk, setModalPk] = useRecoilState(modalPkState);
  const [name, setName] = useRecoilState(modalBuildingNameState);
  const dataFetch = async () => {
    console.log(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/detail_ajax/${modalPk}`
    );
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/detail_ajax/${modalPk}`)
      .then(function (res) {
        console.log(res);
        console.log(res.data.name);
        setName(res.data.name);
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
        <S.ModalAddress></S.ModalAddress>
        <S.MainBtn onClick={toSecondModal}>목적지 설정</S.MainBtn>
        <S.ElseBtn onClick={onEntrance}>건물 출입구 확인하기</S.ElseBtn>
        <S.ElseBtn onClick={onFacility}>건물 내 시설 확인하기</S.ElseBtn>
      </S.ModalContainer>
    </>
  );
}
