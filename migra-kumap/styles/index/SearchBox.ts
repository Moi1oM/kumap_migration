import styled from "styled-components";

export const top_modal_container = styled.div`
  z-index: 10;
  position: relative;
  left: 5%;
  right: 5%;
  top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const first_search_modal = styled.div`
  width: 77%;
  height: 50px;
  background-color: #fdfbfb;
  border: 1px solid rgba(113, 113, 116, 0.22);
  box-shadow: 12px 26px 50px rgb(90 108 234 / 7%);
  border-radius: 22px;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const serachScope = styled.img`
  margin-left: 5%;
  width: 20px;
  height: 20px;
  text-align: center;
`;

export const searchFont1 = styled.span`
  margin-left: 5%;
  height: 27px;
  font-family: "Post No Bills Colombo Medium";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #868686;
`;

export const searchFont2 = styled.span`
  margin: 0% auto;
  height: 27px;
  font-family: "Post No Bills Colombo Medium";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #868686;
`;

export const myButton = styled.div`
  margin-left: 3%;
  background-color: #be4238;
  border-radius: 100%;
  width: 48px;
  height: 48px;

  color: white;
  line-height: 50px;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`;
