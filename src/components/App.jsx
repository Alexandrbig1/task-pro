import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";
import { Route } from "react-router-dom";
import { HashRouter as Router, Routes } from "react-router-dom";
import FontsHelmet from "./FontHelmet";
import RootLayout from "../layouts/RootLayout/RootLayout";
import { RestrictedRoute } from "./RestrictRoute";
import { PrivateRoute } from "./PrivateRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks";
import { useDispatch } from "react-redux";
import Loader from "./Loader/Loader";

const themes = {
  light: {
    colors: {
      accentBgColor: "#bedbb0",
      accentTextColor: "#bedbb0",
      mainTextColor: "#161616",
      secondaryTextColor: "#161616",
      buttonsColor: "#161616",
      secondaryButtonsColor: "#121212",
      buttonsBgColor: "#BEDBB0",
      burgerColor: "#161616",
      mainBgColor: "#F6F6F7",
      mainTextColorLowOp: "rgba(22, 22, 22, 0.50)",
      secondaryTextColorLowOp: "rgba(22, 22, 22, 0.50)",
      mainTextColorVeryLowOp: "rgba(22, 22, 22, 0.10)",
      modalBorderColorLowOp: "rgba(22, 22, 22, 0.10)",
      modalBgColor: "rgba(21, 21, 21, 0.30)",
      needHelpBgColor: "#F6F6F7",
      modalWindowsBgColor: "#FCFCFC",
      mainAsideColor: "#FFF",
      mainHeaderColor: "#FCFCFC",
      mainPageTextColor: "rgba(22, 22, 22, 0.70)",
      themeWrapper: "#FCFCFC",
      themeWrapperBorder: "#BEDBB0",
      themeMainTextColor: "rgba(22, 22, 22, 0.80)",
      themeTextColor: "#161616",
      themeTextHoverColor: "#BEDBB0",
      logoIconColor: "#fff",
      logoIconBgColor: "#1F1F1F",
      whiteColor: "#FFF",
      whiteColorLowOp: "rgba(255, 255, 255, 0.3)",
      blackColor: "#161616",
      greenColor: "#BEDBB0",
      errorColor: "#ff2929",
      priorityColorLow: "#8FA1D0",
      priorityColorWithout: "rgba(22, 22, 22, 0.3)",
      priorityColorMedium: "#E09CB5",
      priorityColorHigh: "#BEDBB0",
      scrollThumb: "rgba(22, 22, 22, 0.10)",
      scrollBar: "#E8E8E8",
      logoutIcon: "#BEDBB0",
      modalBtnHover: "#9dc888",
      modalPlusIcon: "#fff",
      modalPlusIconWrapper: "#161616",
      defaultAvatar: "#fff",
      addColumnBtn: "#fff",
      addColumnPlusWrapper: "#161616",
      cardListScrollThumb: "rgba(22, 22, 22, 0.1)",
      cardListScrollBar: "rgba(22, 22, 22, 0.10)",
      defaultIconBackground: "#F6F6F7",
      calendarBgColor: "#fff",
      calendarNumbersOutLowOp: "rgba(22,22,22,0.2)",
    },
  },
  dark: {
    colors: {
      accentBgColor: "#bedbb0",
      accentTextColor: "#bedbb0",
      mainTextColor: "#fff",
      secondaryTextColor: "#fff",
      buttonsColor: "#161616",
      secondaryButtonsColor: "#121212",
      buttonsBgColor: "#BEDBB0",
      mainTextColorLowOp: "rgba(255, 255, 255, 0.50)",
      secondaryTextColorLowOp: "rgba(255, 255, 255, 0.50)",
      mainTextColorVeryLowOp: "rgba(255, 255, 255, 0.10)",
      modalBorderColorLowOp: "rgba(255, 255, 255, 0.10)",
      modalBgColor: "rgba(21, 21, 21, 0.50)",
      burgerColor: "#fff",
      mainBgColor: "#1F1F1F",
      needHelpBgColor: "#1F1F1F",
      modalWindowsBgColor: "#151515",
      mainAsideColor: "#121212",
      mainHeaderColor: "#161616",
      mainPageTextColor: "rgba(255, 255, 255, 0.5)",
      themeWrapper: "#151515",
      themeWrapperBorder: "#BEDBB0",
      themeMainTextColor: "rgba(255, 255, 255, 0.8)",
      themeTextColor: "rgba(255, 255, 255, 0.5)",
      themeTextHoverColor: "#BEDBB0",
      logoIconColor: "#fff",
      logoIconBgColor: "#1F1F1F",
      whiteColor: "#FFF",
      whiteColorLowOp: "rgba(255, 255, 255, 0.3)",
      blackColor: "#161616",
      greenColor: "#BEDBB0",
      errorColor: "#ff2929",
      priorityColorLow: "#8FA1D0",
      priorityColorWithout: "rgba(255, 255, 255, 0.30)",
      priorityColorMedium: "#E09CB5",
      priorityColorHigh: "#BEDBB0",
      scrollBar: "#121212",
      scrollThumb: "rgba(72, 72, 72, 0.5)",
      logoutIcon: "#BEDBB0",
      modalBtnHover: "#9dc888",
      modalPlusIcon: "#fff",
      modalPlusIconWrapper: "#161616",
      defaultAvatar: "#151515",
      addColumnBtn: "#121212",
      addColumnPlusWrapper: "#fff",
      cardListScrollThumb: "#121212",
      cardListScrollBar: "rgba(255, 255, 255, 0.10)",
      defaultIconBackground: "#1F1F1F",
      calendarBgColor: "#1f1f1f",
      calendarNumbersOutLowOp: "rgba(255,255,255,0.2)",
    },
  },
  violet: {
    colors: {
      accentBgColor: "#bedbb0",
      accentTextColor: "#5255BC",
      mainTextColor: "#FFF",
      secondaryTextColor: "#161616",
      buttonsColor: "#fff",
      secondaryButtonsColor: "#fff",
      buttonsBgColor: "#B8BCFD",
      mainTextColorLowOp: "rgba(255, 255, 255, 0.50)",
      secondaryTextColorLowOp: "rgba(22, 22, 22, 0.50)",
      mainTextColorVeryLowOp: "rgba(255, 255, 255, 0.10)",
      modalBorderColorLowOp: "rgba(22, 22, 22, 0.10)",
      modalBgColor: "rgba(21, 21, 21, 0.30)",
      burgerColor: "#161616",
      mainBgColor: "#D6D8FF",
      needHelpBgColor: "rgba(236, 237, 253, 0.40)",
      modalWindowsBgColor: "#FCFCFC",
      mainAsideColor: "#5255BC",
      mainHeaderColor: "#FFF",
      mainPageTextColor: "rgba(22, 22, 22, 0.70)",
      themeWrapper: "#FCFCFC",
      themeWrapperBorder: "#ECEDFD",
      themeMainTextColor: "rgba(22, 22, 22, 0.80)",
      themeTextColor: "#161616",
      themeTextHoverColor: "#5255BC",
      logoIconColor: "#5255BC",
      logoIconBgColor: "#ECEDFD",
      whiteColor: "#FFF",
      whiteColorLowOp: "rgba(255, 255, 255, 0.3)",
      blackColor: "#161616",
      greenColor: "#BEDBB0",
      errorColor: "#ff2929",
      priorityColorLow: "#8FA1D0",
      priorityColorWithout: "rgba(22, 22, 22, 0.3)",
      priorityColorMedium: "#E09CB5",
      priorityColorHigh: "#BEDBB0",
      scrollThumb: "#B8BCFD",
      scrollBar: "#FFF",
      logoutIcon: "#FFF",
      modalBtnHover: "#7b7ede",
      modalPlusIcon: "#161616",
      modalPlusIconWrapper: "#FFF",
      defaultAvatar: "#fff",
      addColumnBtn: "#fff",
      addColumnPlusWrapper: "#5255BC",
      cardListScrollThumb: "#b8bcfd",
      cardListScrollBar: "#FFF",
      defaultIconBackground: "#ECEDFD",
      calendarBgColor: "#fff",
      calendarNumbersOutLowOp: "rgba(22,22,22,0.2)",
    },
  },
};

const Welcome = lazy(() => import("../pages/Welcome/Welcome"));
const CreamySharks = lazy(() => import("../pages/CreamySharks/CreamySharks"));
const Home = lazy(() => import("../pages/Home/Home"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
// const GoogleAuth = lazy(() => import("../pages/GoogleAuth/GoogleAuth"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  function toggleTheme(e) {
    const themeValue = e.target.textContent;
    setCurrentTheme(themeValue);
    localStorage.setItem("theme", themeValue);
  }

  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider theme={themes[currentTheme]}>
      <FontsHelmet />
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Welcome />} />
            <Route path="creamy-sharks" element={<CreamySharks />} />
            <Route
              path="home"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<Home toggleTheme={toggleTheme} />}
                />
              }
            >
              <Route path=":boardName" element={<MainPage />} />
            </Route>
            <Route
              path="signin"
              element={
                <RestrictedRoute redirectTo="/home" component={<SignIn />} />
              }
            />
            <Route
              path="signup"
              element={
                <RestrictedRoute redirectTo="/home" component={<SignUp />} />
              }
            />
            {/* <Route
              path="google-redirect"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<GoogleAuth />}
                />
              }
            /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
