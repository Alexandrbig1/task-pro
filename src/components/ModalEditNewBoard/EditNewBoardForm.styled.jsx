import { Field, Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  margin: 0;
  position: relative;
`;
export const StyledSmallTitle = styled.p`
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-size: 14px;
  text-align: left;
  margin-bottom: 14px;
`;

export const StyledInput = styled(Field)`
  width: 287px;
  height: 49px;
  padding: 18px;
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  border: 1px solid
    ${(p) =>
      p?.$isDirty && p?.$isError
        ? p.theme.colors.errorColor
        : p.theme.colors.secondaryTextColor};
  transition: all var(--primary-transition);
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-radius: 8px;
  margin-bottom: 24px;
  opacity: 0.4;

  &:focus {
    opacity: 1;
    outline: none;
  }
  @media (max-width: 374.9px) {
    width: 252px;
  }
  @media (min-width: 768px) {
    width: 302px;
  }
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 18px;
  height: 18px;
`;

export const StyledBackgroundLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  flex-basis: calc(100% / 8 - 4px);
  outline: 1px solid
    ${(p) => (p.value ? p.theme.colors.accentTextColor : "transparent")};
  &:active {
    opacity: 1;
  }
`;

export const StyledField = styled(Field)`
  appearance: none;

  &:checked {
    color: ${(p) => p.theme.colors.secondaryTextColor};
  }
`;

export const StyledBackgroudField = styled(Field)`
  appearance: none;

  &:checked {
    stroke: solid 5px ${(p) => p.theme.colors.secondaryTextColor};
  }
`;

export const StyledError = styled.div`
  position: absolute;
  right: 0;
  top: -24px;
  padding: 4px;
  font-size: 14px;
  color: ${(p) => p.theme.colors.errorColor};
  @media (max-width: 374.9px) {
    right: 25px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: ${(p) => p.theme.colors.secondaryTextColor};
  stroke-width: 1.5;
  opacity: ${(p) => (p?.value ? "1" : "0.5")};
  &:active {
    opacity: 1;
  }
`;

export const StyledIconBackground = styled.div`
  width: 100%;
  height: 100%;
  stroke-width: 3.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  opacity: ${(p) => (p.value ? "1" : "0.7")};
  outline: 1px solid
    ${(p) => (p?.value ? p.theme.colors.accentTextColor : "transparent")};
  &:active {
    opacity: 1;
  }
`;

export const DefaultIconWrapper = styled.div`
  background-color: ${(p) => p.theme.colors.defaultIconBackground};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke-width: 3.5;
  border-radius: 6px;

  border: 1px solid
    ${(p) => (p?.value ? p.theme.colors.accentTextColor : "transparent")};
  &:active {
    opacity: 1;
  }
`;

export const StyledDefaultIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${(p) => p.theme.colors.secondaryTextColor};
  stroke-width: 1;
  opacity: ${(p) => (p?.value ? "1" : "0.3")};
  opacity: 1;

  &:active {
    opacity: 1;
  }
`;

export const IconsBackgroundWrapper = styled.div`
  display: flex;
  width: 252px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 40px;
`;
