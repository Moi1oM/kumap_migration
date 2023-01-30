import * as S from "@/styles/index/firstModalStyle";
import { useRecoilState } from "recoil";
import {
  modalState,
  modalLatState,
  modalLonState,
  modalPkState,
} from "@/pages/constants/atom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function FirstModal() {
  const router = useRouter();
  const [modal, setModal] = useRecoilState(modalState);
  const onClickClose = () => {
    setModal(!modal);
    setModalPk(0);
  };
  const [modalPk, setModalPk] = useRecoilState(modalPkState);
  const [name, setName] = useState("");
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

  return (
    <>
      <S.ModalContainer>
        <S.ModalCloseBtn src="modal/close_button.png" onClick={onClickClose} />
        <S.ModalH3>{name}</S.ModalH3>
        <S.ModalAddress></S.ModalAddress>
        <S.MainBtn>목적지 설정</S.MainBtn>
        <S.ElseBtn onClick={onEntrance}>건물 출입구 확인하기</S.ElseBtn>
        <S.ElseBtn onClick={onFacility}>건물 내 시설 확인하기</S.ElseBtn>
      </S.ModalContainer>
    </>
  );
}
