import { useNavigate } from "react-router-dom";
import { SharksBtn, SharksText, SharksWrapper } from "./CreamySharks.styled";

export default function CreamySharks() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SharksWrapper>
      <SharksBtn onClick={goBack}>return</SharksBtn>

      <SharksText>Creamy Sharks is here</SharksText>
    </SharksWrapper>
  );
}
