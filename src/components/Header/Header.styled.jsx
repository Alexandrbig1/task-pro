import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.4rem;
  width: 100%;
  background-color: ${(p) => p.theme.colors.mainHeaderColor};

  @media (min-width: 1440px) {
    justify-content: end;
    height: 6rem;
  }
`;

export const ThemeSwitcherWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const UserData = styled.div`
  display: flex;
  gap: 0.8rem;
`;
