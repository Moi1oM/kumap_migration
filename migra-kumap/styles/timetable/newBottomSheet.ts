import styled from "styled-components";

export const ModalCont = styled.div`
  .scroll::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 20%;
  max-width: 430px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background-color: white;
  border: 1px solid black;
  border-radius: 12px 12px 0 0;
  padding: 12px 0;
  transition: 0.5s ease-in-out;
  &.active {
    height: 45%;
    max-height: 45%;
    display: flex;
    justify-content: flex-start;
    overflow-y: scroll;
  }
`;

export const StyleInput = styled.input`
  position: relative;
  top: 10px;
  width: 70%;
  margin: 10px auto;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  &.active {
    padding-top: 7px;
    padding-bottom: 7px;
  }
`;
