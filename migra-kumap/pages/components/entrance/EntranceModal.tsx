import { modalBuildingNameState } from "@/pages/constants/atom";
import {
  entranceModalState,
  entranceNameState,
  entrancePkState,
  entranceTimeState,
} from "@/pages/constants/entranceAtom";
import * as S from "@/styles/entrance/entranceModal";
import { useRecoilState } from "recoil";

export default function EntranceModal() {
  const [name, setName] = useRecoilState(modalBuildingNameState);
  const [entrancePk, setEntrancePk] = useRecoilState(entrancePkState);
  const [entranceModal, setEntranceModal] = useRecoilState(entranceModalState);

  const [entranceName, setEntranceName] = useRecoilState(entranceNameState);
  const [entranceTime, setEntranceTime] = useRecoilState(entranceTimeState);

  const onClickClose = () => {
    setEntranceModal(false);
  };

  return (
    <>
      <S.ModalContainer>
        <S.ModalCloseBtn src="/modal/close_button.png" onClick={onClickClose} />
        <S.ModalH3>{name ? name : "error"}</S.ModalH3>
        <S.entranceImg src="/modal/exampleEnt.png" />
        <S.entranceSpan>{entranceName}</S.entranceSpan>
        <S.entranceSpan>{entranceTime}</S.entranceSpan>
      </S.ModalContainer>
    </>
  );
}
