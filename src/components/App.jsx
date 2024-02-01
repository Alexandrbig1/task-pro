import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    colors: {
      mainTextColor: "#242424",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafafa",
    },
  },
  violet: {
    colors: {
      mainTextColor: "#fafafa",
    },
  },
};

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  function toggleTheme() {
    let newTheme;

    switch (theme) {
      case "light":
        newTheme = "dark";
        break;
      case "dark":
        newTheme = "violet";
        break;
      case "violet":
        newTheme = "light";
        break;
      default:
        newTheme = "light";
        break;
    }
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
