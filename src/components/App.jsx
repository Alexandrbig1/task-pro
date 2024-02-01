import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lazy } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import FontsHelmet from "./FontHelmet";
import RootLayout from "../layouts/RootLayout/RootLayout";

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

const Welcome = lazy(() => import("../pages/Welcome/Welcome"));
const Home = lazy(() => import("../pages/Home/Home"));
const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Welcome />} />
        <Route path="auth/signin" element={<SignIn />} />
        <Route path="auth/signup" element={<SignUp />} />
        <Route path="home" element={<Home toggleTheme={toggleTheme} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <FontsHelmet />
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
