import * as S from "@/styles/index/secondModalStyle";
import { useRecoilState } from "recoil";
import {
  modalBuildingNameState,
  modalLatState,
  modalLonState,
  modalSecondState,
  modalThirdState,
} from "../constants/atom";

export default function SecondModal() {
  const [name, setName] = useRecoilState(modalBuildingNameState);
  const [modalSecond, setModalSecond] = useRecoilState(modalSecondState);
  const [modalThird, setModalThird] = useRecoilState(modalThirdState);
  const closeModal = () => {
    setName("");
    setModalSecond(false);
  };
  const [modalLat, setModalLat] = useRecoilState(modalLatState);
  const [modalLon, setModalLon] = useRecoilState(modalLonState);

  const fromlatlon = { lat: 37.587988, lon: 127.03059 };
  const toThirdModal = () => {
    console.log(modalLat, modalLon);
  };
  return (
    <>
      <S.ModalContainer>
        <S.ModalCloseBtn src="modal/close_button.png" onClick={closeModal} />
        <S.ModalH3>이동경로 검색</S.ModalH3>
        <S.AddressP>도보 기준 이동경로 및 시간을 계산합니다</S.AddressP>
        <S.button_loc>
          <S.loc_img src="/modal/location.png" />
          <S.SecondSpan>출발지를 입력해주세요</S.SecondSpan>
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
