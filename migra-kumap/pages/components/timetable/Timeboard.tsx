import * as S from "@/styles/timetable/style";
import * as SS from "./style";
import TableRow from "./TableRow";

export default function Timeboard() {
  return (
    <S.TimetableWrapper>
      <SS.TableLine />
      <TableRow day="월" dayidx={0} />
      <SS.TableLine />
      <TableRow day="화" dayidx={1} />
      <SS.TableLine />
      <TableRow day="수" dayidx={2} />
      <SS.TableLine />
      <TableRow day="목" dayidx={3} />
      <SS.TableLine />
      <TableRow day="금" dayidx={4} />
      <SS.TableLine />
    </S.TimetableWrapper>
  );
}

/* 과목을 넣었을 때 시간표가 자동 배치되는 것을 어떻게 구현할 것인가? */
// 연합해커톤 때 구현했던 캘린더처럼 '칸'을 보이지 않게 어떻게 나누지?
// 아니면 길이를 일정하게 나눈다음에
// -> 과목정보에 맞게 height지정 / 위치를 지정해줘야할까
// -> 유의해야할 것은 비율이 안 깨지게 할 수 있을까?
