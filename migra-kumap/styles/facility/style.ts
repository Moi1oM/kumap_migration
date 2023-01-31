import styled from "styled-components";

interface ffacList {
  key: number;
}

export const middleDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 450px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const wrapper = styled.div`
  background-color: white;
  min-height: 100vh;
  padding: 24px;
`;

export const titleBox = styled.div`
  margin: 20px 0;
  margin-bottom: 0px;
  align-items: center;
  text-align: center;
  font-weight: bolder;
  font-size: 150%;
`;

export const contentBox = styled.div``;

export const titleHeader = styled.div`
  background: #ffffff;
  overflow: hidden;
  padding: 20px;
  padding-bottom: 0px;
  text-align: center;
`;

export const historyBox = styled.div`
  background: white;
  padding: 10%;
  padding-top: 0%;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;

export const historyP = styled.p`
  margin: 0px;
  white-space: pre-line;
`;

export const facList = styled.div<ffacList>`
  margin: 5%;
`;

export const facName = styled.span`
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #1d232e;
`;

export const facCategory = styled.span`
  width: 80px;
  height: 25px;
  background: #ffffff;
  border: 1px solid rgba(113, 113, 116, 0.22);
  box-shadow: 12px 26px 50px rgb(90 108 234 / 7%);
  border-radius: 22px;
  float: right;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  vertical-align: center;
  letter-spacing: 0.5px;
  color: #000000;
  mix-blend-mode: normal;
`;

export const facInfo = styled.p`
  font-weight: 550;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2%;
  margin-bottom: 10%;
  letter-spacing: -0.5px;
  color: rgba(29, 35, 46, 0.4);
`;

export const BackMarker = styled.img`
  width: 28px;
  height: 28px;
  padding-right: 85.5%;
  padding-left: 4.5%;
  padding-top: 6%;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
`;
