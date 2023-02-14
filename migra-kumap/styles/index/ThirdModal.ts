import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 42%;
  max-width: 450px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background-color: white;
  border-radius: 12px 12px 0 0;
  padding: 12px 0;
`;

export const ModalCloseBtn = styled.img`
  overflow-clip-margin: content-box;
  overflow: clip;
  width: 24px;
  height: 24px;
  padding-left: 80%;
  cursor: pointer;
`;

export const ModalH3 = styled.h3`
  font-size: 120%;
  margin-bottom: 0px;
  font-weight: 600;
  margin-top: 0px;
`;

export const fromBuildToBuild = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4px 0px 4px 0px;
  padding: 8px 0px 8px 0px;
  background-color: white;
  width: 80%;
  height: 10%;
  line-height: 30px;
  border-radius: 10px;
  margin: 0px;
  padding: 0;
`;

export const arrowImg = styled.img`
  width: 14px;
  height: 10px;
`;

export const buttonMain = styled.div`
  margin: 4px 0px 4px 0px;
  padding: 8px 0px 8px 0px;
  background-color: #8b0029;
  color: white;
  width: 75%;
  height: 12%;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 25%);
  line-height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-size: large;
  font-weight: 600;
`;

export const runningImg = styled.img`
  width: 27px;
  height: 35px;
`;

export const elseButton = styled.p`
  cursor: pointer;
  margin: 4px 0px 4px 0px;
  padding: 8px 0px 8px 0px;
  background-color: rgb(233, 231, 231);
  color: black;
  width: 75%;
  height: 12%;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 25%);
  line-height: 30px;
  border-radius: 10px;
  text-decoration: none;
  font-size: large;
  font-weight: 400;
`;

export const elseButton2 = styled.a`
  cursor: pointer;
  margin: 4px 0px 4px 0px;
  padding: 8px 0px 8px 0px;
  background-color: rgb(233, 231, 231);
  color: black;
  width: 75%;
  height: 12%;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 25%);
  line-height: 30px;
  border-radius: 10px;
  text-decoration: none;
  font-size: large;
  font-weight: 400;
`;

export const thirdModalSpan = styled.span`
  font-size: 16px;
`;
