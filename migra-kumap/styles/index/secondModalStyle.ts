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
  padding-left: 80%;
  cursor: pointer;
`;

export const ModalH3 = styled.h3`
  font-size: 160%;
  margin-bottom: 0px;
  font-weight: 900;
  margin-top: 0px;
`;

export const AddressP = styled.p`
        margin-top: 0px;
        font-size: 80%;
`;