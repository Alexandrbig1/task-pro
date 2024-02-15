import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2rem;
  height: 6rem;
  width: 100%;
  background-color: ${(p) => p.theme.colors.mainHeaderColor};

  @media (min-width: 768px) {
    height: 6.8rem;
    padding: 1.8rem 3.2rem;
  }

  @media (min-width: 1440px) {
    justify-content: end;
    padding: 1.8rem 2.4rem;

    max-width: 118rem;
  }
`;

export const ThemeSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;
