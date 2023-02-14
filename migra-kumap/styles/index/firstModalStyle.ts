import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 35%;
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
  padding-right: 80%;
  cursor: pointer;
`;

export const ModalH3 = styled.h3`
  font-size: 160%;
  margin-bottom: 0px;
  font-weight: 600;
  margin-top: 0px;
`;

export const ModalAddress = styled.p`
  margin-top: 0px;
  font-size: 80%;
`;

export const MainBtn = styled.p`
  cursor: pointer;
  margin: 4px 0px 4px 0px;
  padding: 8px 0px 8px 0px;
  background-color: #8b0029;
  color: white;
  width: 75%;
  height: 12%;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 25%);
  line-height: 30px;
  border-radius: 10px;
  font-size: large;
  font-weight: 600;
`;

export const ElseBtn = styled.div`
  cursor: pointer;
  margin: 4px 0px 4px 0px;
  padding: 8px 0px 8px 0px;
  background-color: rgb(233, 231, 231);
  width: 40%;
  height: 15vh;
  box-shadow: 0px 2px 4px rgb(0 0 0 / 25%);
  border-radius: 10px;
`;

export const ElseBtnImg = styled.img`
  margin: 0 auto;
  width: 45%;
  height: 60%;
  padding-top: 5%;
`;

export const ElseBtnText = styled.p`
  color: #8b0029;
  line-height: 30px;
  text-decoration: none;
  font-size: large;
  font-weight: 400;
`;

export const rowFlext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
