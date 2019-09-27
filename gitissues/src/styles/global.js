import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    border: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height:100%;
  }

  body{
    background: #230187;
    color: #011016;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  button{
    cursor: pointer;
    font: inherit;
  }
`;
