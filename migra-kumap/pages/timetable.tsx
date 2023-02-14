import * as S from "../styles/timetable/style";
import Timeboard from "./components/timetable/Timeboard";

export default function Timetable() {
  return (
    <>
      <S.TopBox>
        <S.TopFont>시간표 짜기</S.TopFont>
      </S.TopBox>
      <S.TopContainer>
        <S.semesterFont>2023-1 시간표</S.semesterFont>
        <S.plusButton>+</S.plusButton>
      </S.TopContainer>
      <Timeboard />
    </>
  );
}
