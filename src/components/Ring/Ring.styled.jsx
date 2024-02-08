import styled from "styled-components";
import { LuBellRing } from "react-icons/lu";

export const RingIcon = styled(LuBellRing)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.accentTextColor};

  &:hover {
    cursor: pointer;
  }
`;

export const RingList = styled.li`
  display: flex;
  align-items: flex-end;
`;
