import styled, { css, createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css?family=Notable');
    font-family: 'Notable', sans-serif;
  }
`

export const SCButtonWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center;
  height: 80vh;
  position: relative;
  width: 100%;
  font-size: 50px;
  color: #7bb2e8;
  font-weight: 900;
  letter-spacing: 4px;
`;
const cross = css`
  content: '';
  display: block;
  width: 50px;
  height: 50px;
  margin: 15px auto 0;
  width: 60px;
  height: 8px;
  background-color: #7CB2E8;
`;
export const SCButton = styled.button`
  cursor: pointer;
  background-color: #474448;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  box-shadow: inset 0 5px 6px 1px #fff, 0 5px 10px 1px #000;
  margin-left: 25px;
  &:focus, &:active {
    box-shadow: inset 0 5px 6px 5px #000, 0 0 0 0;
    outline: none;
  }
  :before {
    ${cross};
    transform: rotate(45deg);
    margin-top: 5px;
  }
  :after {
    ${cross};
    transform: rotate(-45deg);
    margin-top: -8px;
  }
`