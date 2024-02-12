import styled from "styled-components";

const changeColor = (props) => {
  switch (props.value) {
    case "low":
      return `${props.theme.colors.priorityColorLow}`;
    case "medium":
      return `${props.theme.colors.priorityColorMedium}`;
    case "high":
      return `${props.theme.colors.priorityColorHigh}`;
    case "without":
      return `${props.theme.colors.priorityColorWithout}`;
    default:
      return `${props.theme.colors.priorityColorWithout}`;
  }
};

export const CardItem = styled.div`
  width: 335px;
  border-radius: 8px;
  background: ${changeColor};
  overflow: hidden;
  list-style: none;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 260px;
  }
`;
export const Container = styled.div`
  width: 330px;
  padding: 14px 20px;
  background: ${(p) => p.theme.colors.themeWrapper};
  margin-left: auto;
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 255px;
  }
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.burgerColor};
  margin-bottom: 12px;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainPageTextColor};
  height: 34px;
  overflow: hidden;
  margin-bottom: 18px;
`;

export const Line = styled.div`
  max-width: 290px;
  height: 0.5px;
  background-color: ${(p) => p.theme.colors.priorityColorWithout};
  margin-bottom: 16px;
`;

export const UnderlineInfo = styled.div`
  display: flex;
  gap: 14px;
`;

export const PriorityWrapp = styled.div`
  text-align: left;
  width: 56px;
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainPageTextColor};
  margin-bottom: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
`;

export const PriorityColor = styled.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  background: ${changeColor};
`;

export const PriorityText = styled.span`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.burgerColor};
`;

export const DeadlineWrapp = styled.div`
  width: 53px;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 10px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.burgerColor};
`;
