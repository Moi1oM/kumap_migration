import styled from "styled-components";

export const TopBox = styled.div`
  width: 100%;
  height: 90px;
  background-color: #be4238;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const TopFont = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: white;

  line-height: 125px;
  letter-spacing: 0.5px;
  text-align: center;
`;

export const TopContainer = styled.div`
  width: 95%;
  height: 50px;
  margin: 0% auto;
  display: flex;
  justify-content: space-between;

  background-color: yellowgreen;
`;

export const semesterFont = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 50px;
`;

export const plusButton = styled.div`
  width: 50px;
  height: 50px;

  background-color: #be4238;
  border-radius: 100%;

  font-size: 50px;
  color: white;
  line-height: 55px;
  text-align: center;
`;

export const TimetableWrapper = styled.div`
  width: 95%;
  height: 400px;
  margin: 0% auto;
  background-color: blue;
`;
