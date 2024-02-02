import styled from "styled-components";
import { primaryFont } from "../fonts";
import { HiOutlineLogout } from "react-icons/hi";

export const ButtonIcon = styled(HiOutlineLogout)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const LogoutBtn = styled.a`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 1.4rem;
  align-items: center;
`;

export const LogoutText = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  border-radius: 8px;
  font-family: ${primaryFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
