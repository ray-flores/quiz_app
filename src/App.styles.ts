import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from './images/elcarito.jpg';

export const GlobalStyle =  createGlobalStyle`
  html {
    height: 100%;

  }

  body {
    background-image: url(${backgroundImage});
    background-size: cover;
    margin: 0;
    padding: 0 20 px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    fon-family: 'Catamaran', sans-serif;a
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', 
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    backgroung-size: 100%;
    background-clip: text;
    -webkit-backgroound-clip: test;
    -webkit-text-fill-color: black;
    -moz-background-clip: text;
    -moz-text-fill-color: black;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }
`;
