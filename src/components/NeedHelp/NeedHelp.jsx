import { useState } from "react";
import { HelpBtn, HelpText, HelpWrapper, ImgWrap } from "./NeedHelp.styled";

const NeedHelp = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openHelpModal = () => {
    setIsOpenModal(true);
  };

  // const closeHelpModal = () => {
  //   setIsOpenModal(false);
  // };

  return (
    <>
      <HelpWrapper>
        <ImgWrap>
          <img src="images/flower.png" alt="flower" />
        </ImgWrap>
        <HelpText>
          If you need help with TaskPro, check out our support resources or
          reach out to our customer support team.
        </HelpText>
        <HelpBtn onClick={() => openHelpModal()}>Need help?</HelpBtn>
      </HelpWrapper>
      {isOpenModal && <div className="modal"></div>}
    </>
  );
};
export default NeedHelp;
