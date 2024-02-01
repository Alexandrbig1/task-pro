import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1.8rem 2.4rem;
  width: 100%;
  background-color: ${(p) => p.theme.colors.mainHeaderColor};
`;

export const ThemeSwitcherWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const UserData = styled.div`
  display: flex;
  gap: 0.8rem;
`;
