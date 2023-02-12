import styled from "styled-components";

export const wrapper = styled.div`
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 40;
  width: calc(100% - 48px);
  min-height: 100vh;
  padding: 24px;
`;

export const header = styled.div`
  background: #ffffff;
  overflow: hidden;
  padding: 20px 0 10px 0;
  text-align: center;
`;

export const choice = styled.div`
  background: white;
  overflow: scroll;
  height: 100vh;
  padding: 2vh 5% 10vh 5%;
`;

export const closeBtn = styled.img`
  width: 24px;
  height: 24px;
  padding-left: 80%;
  cursor: pointer;
`;

export const inputHere = styled.input`
  border: none;
  background: rgb(240, 238, 238);
  padding: 10px;
  font-size: 18px;
  width: 80%;
  margin-top: 10px;
  border-radius: 6px;
  color: black;
`;

export const itemDiv = styled.div`
  margin: 3% 0px;
  display: flex;
  align-items: center;
`;

export const buildName = styled.span`
  font-size: 17px;
  font-weight: 470;
  color: #333;
  text-decoration-line: none;
  cursor: pointer;
`;
