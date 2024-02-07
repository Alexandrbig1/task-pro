import styled from "styled-components";

export const BoardWrapper = styled.div``;

export const BoardTitle = styled.h2`
  position: absolute;
  top: 14px;
  left: 20px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
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
  background: #121212;
  padding: 18px 20px;
`;

export const ColumnTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const IconList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-left: auto;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-end;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Svg = styled.svg`
  stroke: ${(p) => p.theme.colors.mainPageTextColor};
`;
