import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Header/Header";
import { AsideContainer, Container, MainContainer } from "./Layout";
import Logo from "./Logo/Logo";
import MainPage from "./MainPage/MainPage";

const themes = {
  light: {
    colors: {
      mainTextColor: "#161616",
      mainBgColor: "#F6F6F7",
      mainAsideColor: "#FFF",
      mainHeaderColor: "#FCFCFC",
      mainPageTextColor: "rgba(22, 22, 22, 0.70)",
      themeWrapper: "#FCFCFC",
      themeWrapperBorder: "#BEDBB0",
      themeMainTextColor: "rgba(22, 22, 22, 0.80)",
      themeTextColor: "#161616",
      themeTextHoverColor: "#BEDBB0",
      whiteColor: "#FFF",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fff",
      mainBgColor: "#232323",
      mainAsideColor: "#121212",
      mainHeaderColor: "#161616",
      mainPageTextColor: "rgba(255, 255, 255, 0.5)",
      themeWrapper: "#151515",
      themeWrapperBorder: "#BEDBB0",
      themeMainTextColor: "rgba(255, 255, 255, 0.8)",
      themeTextColor: "rgba(255, 255, 255, 0.5)",
      themeTextHoverColor: "#BEDBB0",
      whiteColor: "#FFF",
    },
  },
  violet: {
    colors: {
      mainTextColor: "#FFF",
      mainBgColor: "#D6D8FF",
      mainAsideColor: "#5255BC",
      mainHeaderColor: "#FFF",
      mainPageTextColor: "rgba(22, 22, 22, 0.70)",
      themeWrapper: "#FCFCFC",
      themeWrapperBorder: "#ECEDFD",
      themeMainTextColor: "rgba(22, 22, 22, 0.80)",
      themeTextColor: "#161616",
      themeTextHoverColor: "#5255BC",
      whiteColor: "#FFF",
    },
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  function toggleTheme(e) {
    const themeValue = e.target.textContent;
    setCurrentTheme(themeValue);
    localStorage.setItem("theme", themeValue);
  }

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Container>
        <AsideContainer>
          <Logo />
        </AsideContainer>
        <MainContainer>
          <Header toggleTheme={toggleTheme} />
          <main>
            <MainPage />
          </main>
        </MainContainer>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
