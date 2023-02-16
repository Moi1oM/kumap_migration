import styled from "styled-components";

/*-- 샘플 --*/
export const SubjectCell = styled.div`
  position: relative;
  min-width: 70px;
  max-width: 90px;
  height: 55px;
  //duration(강의시간) -> 다음교시와 공강시간 계산해서 색깔 바뀌어야 함
  border-radius: 5px;
  margin-left: 2%;
`;

export const Subjectname = styled.div`
  padding: 1px;
  height: 24px;

  color: white;
  font-size: 1.5%;
  font-weight: 650;
  padding-left: 2px;
`;

export const Profname = styled.div`
  height: 10px;

  color: white;
  font-size: 1%;
  font-weight: 400;
  padding-left: 2px;
`;

export const Lecplace = styled.div`
  height: 15px;

  color: white;
  font-size: 1%;
  font-weight: 505;
  padding-bottom: 2px;
  padding-left: 2px;
`;

export const TableLine = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid rgba(145, 141, 141, 0.5);
`;

export const TableRowContainer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: row;
`;

export const TableRowBox = styled.div`
  width: 100%;
  height: 55px;
  margin-top: 2%;
  margin-bottom: 2%;

  display: flex;
  flex-direction: row;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DayFont = styled.div`
  color: #908d8d;
  font-size: 11px;
  font-weight: 700;

  margin-top: 7%;
  margin-left: 2%;
  margin-right: 4%;
`;

export const ModalConainer = styled.div`
  width: 100%;
  height: 130px;

  background-color: #be4238;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ResultFont = styled.p`
  width: 60%;
  height: 10%;
  color: white;

  font-size: 10%;
`;

export const ResultButton = styled.div`
  width: 100%;
  height: 10%;
`;
