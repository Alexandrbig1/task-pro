import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;

  @media (min-width: 375px) {
    max-width: 37.5rem;
  }

  @media (min-width: 768px) {
    max-width: 76.8rem;
    padding: 0 3.2rem;
  }

  @media (min-width: 1440px) {
    display: flex;
    max-width: 144rem;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
