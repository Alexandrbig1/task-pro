import styled from "styled-components";
import { primaryFont } from "../../components/fonts";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const SharksWrapper = styled.div`
  min-height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    ${(p) => p.theme.colors.accentBgColor} 92.19%
  );
`;

export const SharksBtnIcon = styled(FaLongArrowAltLeft)`
  font-size: 1.8rem;
  color: #121212;

  transition: all var(--primary-transition);
`;

export const SharksBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  transition: all var(--primary-transition);

  width: 80px;

  &:hover {
    cursor: pointer;

    gap: 0.4rem;

    ${SharksBtnIcon} {
      color: ${(p) => p.theme.colors.greenColor};
    }
  }
`;

export const SharksBtn = styled.p`
  color: #121212;
  font-family: ${primaryFont};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const SharksText = styled.p`
  color: #121212;
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SharksTitle = styled.h1`
  color: #121212;
  text-align: center;
  font-family: ${primaryFont};
  font-size: 22px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const SharksTextContainer = styled.div`
  padding: 2rem 4.8rem;
  width: 100%;
  max-width: 118rem;
  margin: 0 auto;
`;

export const SharksTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4.8rem;
`;

export const SharksTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const SharksTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export const SharksTeamTitle = styled.h2`
  color: #121212;
  font-family: ${primaryFont};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;
