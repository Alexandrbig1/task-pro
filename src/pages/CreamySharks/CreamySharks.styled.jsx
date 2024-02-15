import styled from "styled-components";
import { primaryFont } from "../../components/fonts";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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

export const SharksTextSpan = styled.strong`
  color: #fc550e;
`;

export const SharksTitle = styled.h1`
  color: #121212;
  text-align: center;
  font-family: ${primaryFont};
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const SharksTitleSpan = styled.span`
  position: relative;

  &::after {
    width: 0;
    height: 0;

    @media (min-width: 662px) {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      width: 104%;
      height: 100%;
      background-color: rgb(82, 85, 188, 0.3);
      border-radius: 50rem;
    }
  }
`;

export const SharksTextContainer = styled.div`
  padding: 2rem 2.4rem;
  width: 100%;
  max-width: 118rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem 4.8rem;
  }
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

  margin-bottom: 2.4rem;
  max-width: 78rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 98rem;
  }
`;

export const SharksTeamTitle = styled.h2`
  color: #121212;
  text-align: center;
  font-family: ${primaryFont};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const ImgCardsContainer = styled.div`
  /* max-width: 76.8rem; */

  margin-top: 2.4rem;

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const ImgCardsMenu = styled.ul`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: 2.4rem;
  column-gap: 1.2rem;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const ImgCardItemsWrapper = styled.div`
  padding: 1.2rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom: 1px solid #121212;

  background-color: white;

  transition: all var(--primary-transition);

  /* transform: translateY(-50%); */
`;

export const ImgCardsItems = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;

  background-color: transparent;

  transition: all var(--primary-transition);

  &:hover {
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
    transform: scale(1.03);
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const Images = styled.img`
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  z-index: 2;
`;

export const ImgTitle = styled.h3`
  color: #121212;
  text-align: center;
  font-family: ${primaryFont};
  font-size: 22px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const ImgSubTitle = styled.h4`
  color: #121212;
  text-align: center;
  font-family: ${primaryFont};
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;

  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 10px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  font-size: 2.4rem;
  color: #121212;

  transition: var(--primary-transition);

  &:hover {
    color: #5255bc;
  }
`;
export const GithubIcon = styled(FaGithub)`
  font-size: 2.4rem;
  color: #121212;

  transition: var(--primary-transition);

  &:hover {
    color: #5255bc;
  }
`;
