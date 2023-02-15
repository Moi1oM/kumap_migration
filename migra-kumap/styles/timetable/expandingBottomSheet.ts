import styled from "styled-components";

export const ExpandSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 100%;
`;

export const Header = styled.div`
  padding: 16px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export const Content = styled.div`
  padding: 16px;
`;
