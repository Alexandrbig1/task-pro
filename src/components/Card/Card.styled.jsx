import styled from "styled-components";

export const CardItem = styled.li`
  width: 335px;
  border-radius: 8px;
  background: #8fa1d0;
  overflow: hidden;
  list-style: none;
`;
export const Container = styled.div`
  width: 330px;
  padding: 14px 20px;
  background: ${(p) => p.theme.colors.themeWrapper};
  margin-left: auto;
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
  width: 290px;
  height: 0.5px;
  background-color: ${(p) => p.theme.colors.priorityColorWithout};
  margin-bottom: 16px;
`;

export const UnderlineInfo = styled.div`
  display: flex;
  gap: 14px;
`;

export const PriorityWrapp = styled.div`
  width: 35px;
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
  justify-content: center;
  gap: 4px;
`;

export const PriorityColor = styled.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  background: #8fa1d0;
`;

export const PriorityText = styled.span`
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
