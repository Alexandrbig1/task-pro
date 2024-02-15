import styled, { keyframes } from "styled-components";
import { LuBellRing } from "react-icons/lu";

const ringAnimation = keyframes`
0% {
  transform: rotate(-15deg);
}
50% {
  transform: rotate(15deg);
}
100% {
  transform: rotate(-15deg);
}
`;

export const RingIcon = styled(LuBellRing)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.accentTextColor};

  animation: ${ringAnimation} 2s linear infinite;

  &:hover {
    cursor: pointer;
    animation-play-state: paused;
  }
`;

export const RingList = styled.li`
  display: flex;
  align-items: flex-end;
`;
