import * as S from "@/styles/timetable/newBottomSheet";
import { useEffect, useState } from "react";
import Subject from "./Subject";

export default function NewBottomSheet() {
  const subjects = [
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "1", pk: 1 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "2", pk: 2 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "3", pk: 3 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "4", pk: 4 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 5 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 6 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 7 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 8 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 9 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 10 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 11 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 12 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 13 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 14 },
    { title: "암벽등반", prof: "오은선", day: "화(3~4)", star: "5", pk: 15 },
  ];
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const activeModal = (e: any) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    if (searchValue.length >= 2) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [searchValue]);

  return (
    <S.ModalCont className={active ? "active" : undefined}>
      <S.StyleInput
        onChange={activeModal}
        className={active ? "active" : undefined}
        placeholder="과목명을 입력해주세요"
      />
      {active ? (
        subjects.map((sub) => (
          <Subject
            key={sub.pk}
            title={sub.title}
            prof={sub.prof}
            day={sub.day}
            star={sub.star}
          />
        ))
      ) : (
        <h3>과목을 추가해 주세요!</h3>
      )}
    </S.ModalCont>
  );
}
