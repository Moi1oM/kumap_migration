import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
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
  padding-top: 4%;
  cursor: pointer;
`;

export const ModalH3 = styled.h3`
  font-size: 120%;
  margin-bottom: 0px;
  font-weight: 600;
  margin-top: -7%;
`;

export const entranceImg = styled.img`
  width: 40%;
  height: 40%;
  margin-top: 5%;
  margin-right: 6%;
  margin-left: 3%;
  margin-bottom: 3%;
  border-radius: 5px;
`;

export const entranceSpan = styled.span`
  font-size: 70%;
  padding-top: 5%;
`;

export const modalRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

export const modalCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 50%;
`;
