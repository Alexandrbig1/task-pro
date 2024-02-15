import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const AddModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.modalBgColor};
  z-index: 10;
`;

export const StyledAddModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 350px;
  min-height: 221px;
  z-index: 11;
  background-color: ${(p) => p.theme.colors.modalWindowsBgColor};
  border-radius: 10px;
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 90%;
  }
`;

export const AddColumnModalBtn = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const AddColumnTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  margin-bottom: 24px;
`;

export const AddColumnForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AddColumnInput = styled.input`
  width: 100%;
  /* max-width: 352px; */
  height: 49px;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  background-color: transparent;

  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid
    ${(p) =>
      p?.$isError ? p.theme.colors.errorColor : p.theme.colors.accentTextColor};
  outline: none;
  margin-bottom: 24px;
`;

export const CloseAddColumnModal = styled(IoClose)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  position: absolute;
  // top: 1.4rem;
  right: 0;

  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentTextColor};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  right: 0;
  top: -24px;
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 14px;
`;
