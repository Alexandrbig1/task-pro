import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";

export const IconMenuWrapper = styled.div`
  display: block;
  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const IconMenu = styled(TiThMenu)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.burgerColor};
`;
