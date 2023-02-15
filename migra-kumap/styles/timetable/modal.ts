import styled from "styled-components";
import bg from "../../public/modal/location.png";

export const ModalContain = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 25%;
  max-width: 450px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  /* background-color: white; */
  border-radius: 12px 12px 0 0;
  padding: 12px 0;
`;

export const button_loc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  margin-right: 10%;
  margin-left: 5%;
`;

export const SecondSpan = styled.span`
  font-size: 80%;
  opacity: 0.4;
`;

export const inputStyle = styled.input`
  width: 90%;
  height: 20%;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  /* padding-left: 10px; */
  background-color: rgb(233, 233, 233);
  /* background: #343a40; */
  background-image: url(${bg});
  background-position: 5px center;
  background-size: 20px;
  padding-left: 50px;
  box-sizing: border-box;
`;
