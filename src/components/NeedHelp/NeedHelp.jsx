import { useState } from "react";
import NeedHelpModal from "../NeedHelpModal/NeedHelpModal";
import {
  HelpBtn,
  HelpText,
  HelpWrapper,
  ImgWrap,
  HelpStrongText,
  QuestionMark,
} from "./NeedHelp.styled";

const NeedHelp = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openHelpModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <HelpWrapper>
        <ImgWrap>
          <img src="images/flower.png" alt="flower" />
        </ImgWrap>
        <HelpText>
          If you need help with <HelpStrongText>TaskPro</HelpStrongText>, check
          out our support resources or reach out to our customer support team.
        </HelpText>
        <HelpBtn onClick={() => openHelpModal()}>
          <QuestionMark />
          Need help?
        </HelpBtn>
      </HelpWrapper>
      {isOpenModal && <NeedHelpModal openHelpModal={openHelpModal} />}
    </>
  );
};
export default NeedHelp;
