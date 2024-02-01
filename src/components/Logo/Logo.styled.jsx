import styled from "styled-components";

export const LogoText = styled.a`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: Poppins;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
