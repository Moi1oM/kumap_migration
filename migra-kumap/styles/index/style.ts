import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 430px;
`;

export const ImageCont = styled.img`
  width: 100%;
  height: 100vh;
`;

const ToInvertImg = (isActive: boolean) => {
  let amount: number;
  isActive ? (amount = 1) : (amount = 0);
  return amount;
};

export const CategoryImg = styled.img<{ isActive: boolean }>`
  width: 15%;
  height: 10px;
  margin-right: 3px;
`;

export const CategoryBtn = styled.button<{ isActive: boolean }>`
  min-width: 70px;
  padding: 0.3rem;
  width: auto;
  height: 30px;
  border-color: white;
  border-radius: 22px;
  margin-right: 5px;
  border: 1px solid #eee;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.2s;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  color: ${(props) => (props.isActive ? "white" : "black")};
  background-color: ${(props) => (props.isActive ? "#BE4238" : "white")};
`;

export const CategoryBox = styled.div`
  position: absolute;
  width: 100%;
  overflow-x: scroll;
  top: 95px;
  left: 0px;
  padding: 0 0 1rem 0;
  display: inline-block;
  white-space: nowrap;
  overflow: auto;
  z-index: 10;
  height: 40px;

  /* left: 7%;
  right: 7%; */
  & button:first-child {
    margin-left: 7%;
  }
  & button:last-child {
    margin-right: 7%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FloorMarkerBox = styled.div`
  position: relative;
  bottom: 30px;
  right: 20px;

  height: 30px;
  border-radius: 40px;
  background-color: #be4238;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FloorMarkerIcon = styled.div`
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 100%;
  margin-top: 4px;
  margin-left: 5px;
  margin-right: 3px;
`;

export const FloorMarkerImg = styled.img`
  width: 12px;
  height: 12px;
  margin: 5px 5px;
`;

export const FloorMarkerFont1 = styled.span`
  font-size: 11px;
  font-weight: 600;
  line-height: 30px;
  color: white;
  margin-left: 3px;
  margin-right: 3px;
`;

export const FloorMarkerFont2 = styled.span`
  font-size: 11px;
  font-weight: 600;
  line-height: 30px;
  color: white;
  margin-left: 3px;
  margin-right: 9px;
`;
