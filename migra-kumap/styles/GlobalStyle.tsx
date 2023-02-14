import styled, { createGlobalStyle } from "styled-components";

const GlobalStyleWrapper = createGlobalStyle`
  body, button, form, h1, h2, h3, h4, h5, h6, p, input, legend, li, ol, ul, select, table, td, textarea, th {
    margin:0;
    padding:0;
    /* background-color: #1D1D1D; */
  }

  .scroll::-webkit-scrollbar {
  display: none;
}
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Container = styled.div`
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  max-width: 430px;
  //  width: 100vw;
  margin: 0 auto;
  font-size: 1.6rem;
  background-color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  color: #222222;
`;

const GlobalStyle = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyleWrapper></GlobalStyleWrapper>
      <Container>{children}</Container>
    </>
  );
};

export default GlobalStyle;
