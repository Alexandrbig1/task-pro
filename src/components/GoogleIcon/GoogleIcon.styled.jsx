import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

export const GoogleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const IconGoogle = styled(FcGoogle)`
  font-size: 2.4rem;

  &:hover {
    cursor: pointer;
  }
`;
