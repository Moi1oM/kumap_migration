import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 430px;
`;

export const ImageCont = styled.img`
  width: 100%;
`;

const ToInvertImg = (isActive: boolean) => {
  let amount: number;
  isActive ? (amount = 1) : (amount = 0);
  return amount;
};

export const CategoryImg = styled.img<{ isActive: boolean }>`
  width: 15%;
  height: 10px;

  /* filter: invert(ToInvertImg(${(props) => props.isActive})); */
`;

export const CategoryBtn = styled.button<{ isActive: boolean }>`
  min-width: 70px;
  height: 30px;
  border-color: white;
  border-radius: 22px;
  margin-right: 5px;

  color: ${(props) => (props.isActive ? "white" : "black")};
  background-color: ${(props) => (props.isActive ? "#BE4238" : "white")};
`;

export const CategoryBox = styled.div`
  position: absolute;
  top: 95px;
  left: 0px;

  display: inline-block;
  white-space: nowrap;
  overflow: auto;
  /* z-index: 10; */

  width: 86%;
  height: 40px;

  left: 7%;
  right: 7%;

  &::-webkit-scrollbar {
    display: none;
  }
`;
