import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;

  @media (min-width: 375px) {
    /* max-width: 37.5rem; */
  }

  @media (min-width: 768px) {
    /* max-width: 76.8rem; */
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
    display: flex;
    background-color: grey;
    justify-content: center;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  /* max-width: 144rem; */
  /* height: 100%; */

  @media (min-width: 375px) {
    /* max-width: 37.5rem; */
  }

  @media (min-width: 768px) {
    /* max-width: 76.8rem; */
  }

  @media (min-width: 1440px) {
    /* max-width: 144rem; */
    display: flex;
    flex-direction: column;
    /* min-height: calc(100vh - 6.8rem); */
  }
`;
