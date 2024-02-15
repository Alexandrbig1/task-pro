import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";
import { primaryFont } from "./fonts";

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-transition: 0.3s ease-in-out;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  @media(max-width:980px) {
    font-size: 55%;
  }

  body {
    background-color: ${(p) => p.theme.colors.mainAsideColor};
    background-color: #f8f9fa;
    font-family: ${primaryFont};
    margin: 0;
    overflow-x: hidden;

    min-height: 100vh;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1{
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
  
  h3 {
    margin: 0;
    padding: 0;
  }
  h4 {
    margin: 0;
    padding: 0;
  }
  h5 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }`;
