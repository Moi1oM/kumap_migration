import styled from "styled-components";
import * as S from "../styles/timetable/style";
import { SampleInput, PickedSubjects } from "@/src/data";
import Timeboard from "./components/timetable/Timeboard";

import { useRecoilState, useRecoilValue } from "recoil";
import { timetableState } from "pages/constants/timetableAtom";
import { useEffect, useState, useRef } from "react";
import ResultModal from "./components/timetable/ResultModal";

import { motion } from "framer-motion";
import NewBottomSheet from "./components/timetable/newComponent/NewBottomSheet";

// 0: mon -  1: tue - 3: wed - 4: thu - 5: fri
export default function Timetable() {
  const [timetable, setTimetable] = useRecoilState(timetableState);
  const [isClassFull, setIsClassFull] = useState({
    monFull: [],
    tueFull: [],
    wedFull: [],
    thuFull: [],
    friFull: [],
  });

  // const changeClass = (idx: any, val: any) => {
  //   setIsClassFull((prev:) => {
  //     let flagFull = false;

  //     let newMfull: any = [...prev.monFull];
  //     let newTfull: any = [...prev.tueFull];
  //     let newWfull: any = [...prev.wedFull];
  //     let newThfull: any = [...prev.thuFull];
  //     let newFfull: any = [...prev.friFull];

  //     if (idx === 0) {
  //       val.forEach((element) => {
  //         if (newFfull.includes(element)) {
  //           flagFull = true;
  //         }
  //       });
  //     }

  //     return {
  //       mon: newMfull,
  //       tue: newTfull,
  //       wed: newWfull,
  //       thu: newThfull,
  //       fri: newFfull,
  //     };
  //   });
  // };

  const appendSubject = (sub: any) => {
    let dayIdx;
    let classInfo;

    for (let i in sub["duration"]) {
      if (sub["duration"][i] !== "0") {
        dayIdx = Number(i); //요일식별
        classInfo = sub["duration"][i]; //해당 요일에서의 "2-4" 이런 문자열값

        //2-4 사이에 있는 교시숫자를 모두 넣어줘야 함
        if (classInfo.length > 1) {
          let start = sub["duration"][0]; // 2
          let end = sub["duration"][-1]; //4
          let temp = [];

          // 담아주고
          for (let j = start; j <= end; j++) {
            temp.push(j);
          }

          // state변경
        }
      }
    }
  };

  const changeCondition = (day: any, value: any) => {
    setTimetable((prev) => {
      let newMon: any = [...prev.mon];
      let newTue: any = [...prev.tue];
      let newWed: any = [...prev.wed];
      let newThu: any = [...prev.thu];
      let newFri: any = [...prev.fri];

      if (day === 0 && !newMon.includes(value)) {
        newMon = [...newMon, value];
      } else if (day === 1 && !newTue.includes(value)) {
        newTue = [...newTue, value];
      } else if (day === 2 && !newWed.includes(value)) {
        newWed = [...newWed, value];
      } else if (day === 3 && !newThu.includes(value)) {
        newThu = [...newThu, value];
      } else if (day === 4 && !newFri.includes(value)) {
        newFri = [...newFri, value];
      }
      console.log(timetable);

      return {
        mon: newMon,
        tue: newTue,
        wed: newWed,
        thu: newThu,
        fri: newFri,
      };
    });
  };

  useEffect(() => {
    PickedSubjects.forEach((subject) => {
      const temp = subject["duration"];
      for (const i in temp) {
        //수업이 있는 요일처리
        if (temp[i] !== "0") {
          switch (i) {
            case "0":
              changeCondition(0, subject);
              break;
            case "1":
              changeCondition(1, subject);
              break;
            case "2":
              changeCondition(2, subject);
              break;
            case "3":
              changeCondition(3, subject);
              break;
            case "4":
              changeCondition(4, subject);
              break;
          }
        }
      }
    });
  }, []);
  console.log(timetable, "~~~~~~~~~~`");
  console.log(isClassFull, "~%~%~%~%~%~%~%");

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

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

      <ResultModal />

      <NewBottomSheet />
    </>
  );
}
