import { useState } from "react";
// import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";
// import { useDispatch } from "react-redux";
import {
  Route,
  // createBrowserRouter,
  // createRoutesFromElements,
  // RouterProvider,
} from "react-router-dom";
import { HashRouter as Router, Routes } from "react-router-dom";
import FontsHelmet from "./FontHelmet";
import RootLayout from "../layouts/RootLayout/RootLayout";
// import { useDispatch } from "react-redux";
// import { useAuth } from "../hooks";
// import { refreshUser } from "../redux/auth/operations";
// import { RestrictedRoute } from "./RestrictRoute";
// import { PrivateRoute } from "./PrivateRoute";
// import { useAuth } from "../hooks";
// import { refreshUser } from "../redux/auth/operations";

const themes = {
  light: {
    colors: {
      accentBgColor: "#bedbb0",
      accentTextColor: "#bedbb0",
      mainTextColor: "#161616",
      burgerColor: "#161616",
      mainBgColor: "#F6F6F7",
      mainTextColorLowOp: "rgba(22, 22, 22, 0.50)",
      mainTextColorVeryLowOp: "rgba(22, 22, 22, 0.10)",
      modalBgColor: "rgba(21, 21, 21, 0.30)",
      needHelpBgColor: "#F6F6F7",
      mainAsideColor: "#FFF",
      mainHeaderColor: "#FCFCFC",
      mainPageTextColor: "rgba(22, 22, 22, 0.70)",
      themeWrapper: "#FCFCFC",
      themeWrapperBorder: "#BEDBB0",
      themeMainTextColor: "rgba(22, 22, 22, 0.80)",
      themeTextColor: "#161616",
      themeTextHoverColor: "#BEDBB0",
      whiteColor: "#FFF",
      whiteColorLowOp: "rgba(255, 255, 255, 0.3)",
      blackColor: "#161616",
      greenColor: "#BEDBB0",
      errorColor: "#ff2929",
      priorityColorLow: "#8FA1D0",
      priorityColorWithout: "rgba(255, 255, 255, 0.30)",
      priorityColorMedium: "#E09CB5",
      priorityColorHigh: "#BEDBB0",
      scrollThumb: "rgba(22, 22, 22, 0.10)",
      logoutIcon: "#BEDBB0",
    },
  },
  dark: {
    colors: {
      accentBgColor: "#bedbb0",
      accentTextColor: "#bedbb0",
      mainTextColor: "#fff",
      mainTextColorLowOp: "rgba(255, 255, 255, 0.50)",
      mainTextColorVeryLowOp: "rgba(255, 255, 255, 0.10)",
      modalBgColor: "rgba(21, 21, 21, 0.50)",
      burgerColor: "#fff",
      mainBgColor: "#1F1F1F",
      needHelpBgColor: "#1F1F1F",
      mainAsideColor: "#121212",
      mainHeaderColor: "#161616",
      mainPageTextColor: "rgba(255, 255, 255, 0.5)",
      themeWrapper: "#151515",
      themeWrapperBorder: "#BEDBB0",
      themeMainTextColor: "rgba(255, 255, 255, 0.8)",
      themeTextColor: "rgba(255, 255, 255, 0.5)",
      themeTextHoverColor: "#BEDBB0",
      whiteColor: "#FFF",
      whiteColorLowOp: "rgba(255, 255, 255, 0.3)",
      blackColor: "#161616",
      greenColor: "#BEDBB0",
      errorColor: "#ff2929",
      priorityColorLow: "#8FA1D0",
      priorityColorWithout: "rgba(255, 255, 255, 0.30)",
      priorityColorMedium: "#E09CB5",
      priorityColorHigh: "#BEDBB0",
      scrollThumb: "#121212",
      logoutIcon: "#BEDBB0",
    },
  },
  violet: {
    colors: {
      accentBgColor: "#bedbb0",
      accentTextColor: "#5255BC",
      mainTextColor: "#FFF",
      mainTextColorLowOp: "rgba(255, 255, 255, 0.50)",
      mainTextColorVeryLowOp: "rgba(255, 255, 255, 0.10)",
      modalBgColor: "rgba(21, 21, 21, 0.30)",
      burgerColor: "#161616",
      mainBgColor: "#D6D8FF",
      needHelpBgColor: "rgba(236, 237, 253, 0.40)",
      mainAsideColor: "#5255BC",
      mainHeaderColor: "#FFF",
      mainPageTextColor: "rgba(22, 22, 22, 0.70)",
      themeWrapper: "#FCFCFC",
      themeWrapperBorder: "#ECEDFD",
      themeMainTextColor: "rgba(22, 22, 22, 0.80)",
      themeTextColor: "#161616",
      themeTextHoverColor: "#5255BC",
      whiteColor: "#FFF",
      whiteColorLowOp: "rgba(255, 255, 255, 0.3)",
      blackColor: "#161616",
      greenColor: "#BEDBB0",
      errorColor: "#ff2929",
      priorityColorLow: "#8FA1D0",
      priorityColorWithout: "rgba(255, 255, 255, 0.30)",
      priorityColorMedium: "#E09CB5",
      priorityColorHigh: "#BEDBB0",
      scrollThumb: "#B8BCFD",
      logoutIcon: "#FFF",
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

  // const dispatch = useDispatch();
  // // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // const router = (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<RootLayout />}>
  //         <Route index element={<Welcome />} />
  //         <Route path="#/auth/signin" element={<SignIn />} />
  //         <Route path="#/auth/signup" element={<SignUp />} />
  //         <Route path="#/home" element={<Home toggleTheme={toggleTheme} />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Route>
  //     </Routes>
  //   </Router>
  // );

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<RootLayout />}>
  //       <Route index element={<Welcome />} />
  //       <Route path="auth/signin" element={<SignIn />} />
  //       {/* <Route
  //         path="auth/signin"
  //         element={<RestrictedRoute redirectTo="home" component={<SignIn />} />}
  //       /> */}
  //       <Route path="auth/signup" element={<SignUp />} />
  //       {/* <Route
  //         path="auth/signup"
  //         element={<RestrictedRoute redirectTo="home" component={<SignUp />} />}
  //       /> */}
  //       <Route path="home" element={<Home toggleTheme={toggleTheme} />} />
  //       {/* <Route
  //         path="home"
  //         element={
  //           <PrivateRoute
  //             redirectTo="auth/signin"
  //             component={<Home toggleTheme={toggleTheme} />}
  //           /> */}

  //       <Route path="*" element={<NotFound />} />
  //     </Route>
  //   )
  // );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <FontsHelmet />
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Welcome />} />
            <Route path="auth/signin" element={<SignIn />} />
            <Route path="auth/signup" element={<SignUp />} />
            <Route path="home" element={<Home toggleTheme={toggleTheme} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      {/* <RouterProvider router={router} /> */}
    </ThemeProvider>
  );
}

export default App;
