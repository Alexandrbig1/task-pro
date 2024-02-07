import { useState } from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import { Container, MainContainer } from "../../components/Layout";
import MainPage from "../../components/MainPage/MainPage";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home({ toggleTheme }) {
  const [aside, setAside] = useState(false);

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
          <main>
            <MainPage />
          </main>
        </MainContainer>
      </Container>
    </>
  );
}

Home.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
