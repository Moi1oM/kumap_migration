import styled from "styled-components";

export const top_modal_container = styled.div`
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
  width: 18px;
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

export const myContainer = styled.div`
  position: relative;
  z-index: 15; // 카테고리랑 검색창 위에

  width: 15%;
  height: 50px;
`;

export const myButton = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;

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
  cursor: pointer;

  transition: 0.5s ease-in-out;
  &.active {
    right: 0%;
    top: 0%;

    z-index: 20;
    background-color: #ffffff;
    color: #be4238;
  }
`;

export const myButtonModal = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: -15%;
  right: -10%;

  transition: 0.5s ease-in-out;

  display: flex;
  &.activeModal {
    position: absolute;
    top: -15%;
    right: -10%;

    background-color: #be4238;
    width: 240px;
    height: 210px;
    border-radius: 12%;
  }
`;

export const columnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 10%;
`;

export const modalP = styled.p`
  position: relative;
  font-size: 20px;
  visibility: none;
  cursor: pointer;
  opacity: 0;
  color: white;
  &.active {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.34s;
  }
`;

export const mySelect = styled.select`
  display: none;
  box-sizing: border-box;
  width: 100px;
  padding: 4px;
  font-size: 14px;
  border-radius: 6px;
  opacity: 0;
  &.activeSelect {
    display: block;
    transition-delay: 0.45s;
    opacity: 1;
  }
`;

export const myOption = styled.option`
  padding: 4px;
  font-size: 14px;
  color: #fff;
  background: #272822;
`;
