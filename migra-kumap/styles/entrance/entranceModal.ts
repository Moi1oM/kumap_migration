import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 45%;
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
  font-weight: 900;
  margin-top: -7%;
`;

export const entranceImg = styled.img`
  margin: 0 auto;
  width: 60%;
  height: 50%;
  margin-top: 5%;
`;

export const entranceSpan = styled.span`
  padding-top: 5%;
`;
