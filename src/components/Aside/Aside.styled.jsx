import styled from "styled-components";

export const AsideContainer = styled.aside`
  display: none;

  @media (min-width: 1440px) {
    min-height: 100vh;
    display: block;
    max-width: 26rem;
    width: 100%;
    padding: 2.4rem;
    background-color: ${(p) => p.theme.colors.mainAsideColor};
  }
`;
