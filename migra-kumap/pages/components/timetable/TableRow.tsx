import { timetableState } from "../../constants/timetableAtom";
import { useRecoilState } from "recoil";
import * as S from "./style";
import Subject from "./Subject";

export interface TableRowProps {
  day: string;
  dayidx: number;
}

export default function TableRow({ day, dayidx }: TableRowProps) {
  const [timetable, setTimetable] = useRecoilState(timetableState);
  const randomColor = Math.floor(Math.random() * 2) + 1;

  let filtered = []; //정렬된 버전
  let options = [
    timetable["mon"],
    timetable["tue"],
    timetable["wed"],
    timetable["thu"],
    timetable["fri"],
  ];

  let idx = 0; //요일접근 인덱스관리
  for (let elem of options) {
    filtered.push(
      elem.slice().sort(function (a, b) {
        return a["duration"][idx][0] - b["duration"][idx][0];
      })
    );
  }

  return (
    <S.TableRowContainer>
      <S.DayFont>{day}</S.DayFont>
      <S.TableRowBox>
        {/* 이부분에서 Day값에 맞게 과목들 펼치기 */}
        {filtered[dayidx] &&
          filtered[dayidx].map((sub) => (
            <Subject
              key={sub["id"]}
              name={sub["name"]}
              prof={sub["professor"]}
              lecplace={sub["place"]}
              randomColor={randomColor}
            />
          ))}
      </S.TableRowBox>
    </S.TableRowContainer>
  );
}
