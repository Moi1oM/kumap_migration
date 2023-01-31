import styled from "styled-components";

export const first_search_modal = styled.div`
  z-index: 10;
  width: 90%;
  height: 50px;
  position: relative;
  left: 5%;
  right: 5%;
  top: 40px;
  background-color: #fdfbfb;
  border: 1px solid rgba(113, 113, 116, 0.22);
  box-shadow: 12px 26px 50px rgb(90 108 234 / 7%);
  border-radius: 22px;
  text-align: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const searchScope = styled.span`
  height: 27px;
  text-align: center;
  width: 63px;
`;

export const searchFont = styled.span`
  height: 27px;
  font-family: "Post No Bills Colombo Medium";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: rgba(0, 0, 0, 0.7);
`;

export const kumapIcon = styled.img`
  width: 52px;
  height: 52px;
`;
