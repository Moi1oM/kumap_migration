import {
  ResultModalState,
  timetableState,
} from "../../constants/timetableAtom";
import { useRecoilState } from "recoil";
import * as S from "./style";

export default function ResultModal() {
  const [isResultModal, setResultModal] = useRecoilState(ResultModalState);
  const [timetable, setTimetable] = useRecoilState(timetableState);

  return (
    <S.ModalConainer>
      <S.ResultFont>시간 안에 이동이 어려운 수업이 있습니다.</S.ResultFont>
      <S.ResultFont>다른 수업으로 대체해보는 것은 어떨까요?</S.ResultFont>
    </S.ModalConainer>
  );
}
