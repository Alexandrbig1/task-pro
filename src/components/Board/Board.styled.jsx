import styled from "styled-components";

export const BoardWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const BoardTitle = styled.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.burgerColor};
`;

export const ColumnList = styled.ul`
  display: flex;
  gap: 15px;

  // &::-webkit-scrollbar-thumb {
  //   background: ${(p) => p.theme.colors.priorityColorWithout};
  //   border-radius: 12px;
  // }

  // &::-webkit-scrollbar {
  //   width: 12px;
  // }

  // &::-webkit-scrollbar-track {
  //   background: #121212;
  //   opacity: 0.08;
  //   border-radius: 12px;
  // }
`;

export const ColumnItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 335px;
  height: 56px;
  background: ${(p) => p.theme.colors.addColumnBtn};
  padding: 18px 20px;
`;

export const ColumnTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.burgerColor};
`;
