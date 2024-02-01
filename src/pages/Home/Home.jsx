import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import { MainContainer } from "../../components/Layout";
import MainPage from "../../components/MainPage/MainPage";
import PropTypes from "prop-types";

export default function Home({ toggleTheme }) {
  return (
    <>
      <Aside />
      <MainContainer>
        <Header toggleTheme={toggleTheme} />
        <main>
          <MainPage />
        </main>
      </MainContainer>
    </>
  );
}

Home.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
