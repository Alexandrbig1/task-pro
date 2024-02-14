import { useNavigate } from "react-router-dom";
import {
  SharksBtn,
  SharksText,
  SharksTextWrapper,
  SharksTitle,
  SharksWrapper,
  SharksTextContainer,
  SharksBtnWrapper,
  SharksBtnIcon,
  SharksTeamTitle,
  SharksTeamWrapper,
  SharksTeamContainer,
} from "./CreamySharks.styled";

export default function CreamySharks() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SharksWrapper>
      <SharksTextContainer>
        <SharksBtnWrapper onClick={goBack}>
          <SharksBtnIcon />
          <SharksBtn>return</SharksBtn>
        </SharksBtnWrapper>
        <SharksTeamContainer>
          <SharksTextWrapper>
            <SharksTitle>
              Journey to Fullstack Mastery: Task Pro - Our Graduation Project
            </SharksTitle>

            <SharksText>
              Welcome to Task Pro, the culmination of our 10-month journey into
              the world of full-stack development at GoIT. As passionate
              learners and aspiring developers, we proudly present our final
              project that showcases the skills and knowledge acquired during
              this intensive program.
            </SharksText>
          </SharksTextWrapper>
          <SharksTeamWrapper>
            <SharksTeamTitle>Team Members:</SharksTeamTitle>
            <SharksText>
              Meet the talented individuals who brought Task Pro to life! Our
              dedicated team of full-stack developers poured their passion and
              expertise into every line of code, creating a collaborative and
              efficient task management solution.
            </SharksText>
          </SharksTeamWrapper>
        </SharksTeamContainer>
      </SharksTextContainer>
    </SharksWrapper>
  );
}
