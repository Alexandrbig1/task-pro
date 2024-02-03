import { useState } from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import { Container, MainContainer } from "../../components/Layout";
import MainPage from "../../components/MainPage/MainPage";
import PropTypes from "prop-types";

export default function Home({ toggleTheme }) {
  const [aside, setAside] = useState(false);

  function handleAsideHide() {
    setAside((prevState) => !prevState);
  }

  return (
    <Container>
      <Aside aside={aside} handleAsideHide={handleAsideHide} />
      <MainContainer>
        <Header toggleTheme={toggleTheme} handleAsideHide={handleAsideHide} />
        <main>
          <MainPage />
        </main>
      </MainContainer>
    </Container>
  );
}

Home.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
