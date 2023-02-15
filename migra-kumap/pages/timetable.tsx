import styled from "styled-components";
import * as S from "../styles/timetable/style";
import Timeboard from "./components/timetable/Timeboard";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NewBottomSheet from "./components/timetable/newComponent/NewBottomSheet";

export default function Timetable() {
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
      <NewBottomSheet />
    </>
  );
}
