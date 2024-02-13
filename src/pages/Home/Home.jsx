import { useState } from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import { Container, MainContainer } from "../../components/Layout";
import MainPage from "../../components/MainPage/MainPage";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { MainWrapper } from "../../components/MainPage/MainPage.styled";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectCurrentBoard } from "../../redux/boards/selectors";

export default function Home({ toggleTheme }) {
  const [aside, setAside] = useState(false);
  const location = useLocation();

  const { board } = useSelector(selectCurrentBoard);

  function handleAsideHide() {
    setAside((prevState) => !prevState);
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Creamy Sharks - Task Pro</title>
          <meta
            name="description"
            content="Explore TaskPro, the ultimate task manager born out of a 10-month Fullstack Development Bootcamp. Elevate your productivity with TaskPro's intuitive design and powerful functionality."
          />
        </Helmet>
      </HelmetProvider>
      <Container>
        <Aside aside={aside} handleAsideHide={handleAsideHide} />
        <MainContainer>
          <Header toggleTheme={toggleTheme} handleAsideHide={handleAsideHide} />
          <MainWrapper
            background={board ? board.background : "default"}
            loc={location.pathname}
          >
            {location.pathname === "/home" ? (
              <MainPage />
            ) : (
              <Suspense>
                {/* <Suspense fallback={<Loader />}> */}
                <Outlet />
              </Suspense>
            )}
          </MainWrapper>
        </MainContainer>
      </Container>
    </>
  );
}

Home.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
