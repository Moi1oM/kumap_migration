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
  cursor: pointer;
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
  cursor: pointer;
`;

export const loc_img = styled.img`
  width: 23px;
  height: 27px;
  margin-right: 4px;
`;

export const SecondSpan = styled.span`
  font-size: 80%;
`;

export const bottomArrow = styled.img`
  overflow-clip-margin: content-box;
  overflow: clip;
  width: 24px;
  height: 24px;
  padding-right: 40%;
  padding-left: 40%;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const WalkTimeSpan = styled.span`
  font-size: 80%;
  border: 3px solid #be4238;
  border-radius: 10px;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 15%;
  padding-bottom: 5%;
`;
