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
  font-size: 100%;
  margin-bottom: 0px;
  font-weight: 900;
  margin-top: 0px;
`;

export const AddressP = styled.p`
  margin-top: 0px;
  font-size: 60%;
`;

export const button_loc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4px 0px 4px 0px;
  padding: 8px 0px 8px 0px;
  background-color: #e8e8e8;
  width: 80%;
  height: 10%;
  line-height: 30px;
  border-radius: 10px;
`;

export const loc_img = styled.img`
  width: 23px;
  height: 27px;
  margin-right: 4px;
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

export const SecondSpan = styled.span`
  font-size: 80%;
`;
