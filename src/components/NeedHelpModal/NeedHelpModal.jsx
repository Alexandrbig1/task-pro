import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  CloseModal,
  HelpCloseBtn,
  HelpForm,
  HelpInput,
  HelpModalWrap,
  HelpSubmitBtn,
  HelpTextArea,
  HelpTitle,
  StyledModal,
} from "./NeedHelpModal.styled";

const NeedHelpModal = ({ openHelpModal }) => {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        openHelpModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      // componentWillUnmount(
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [openHelpModal]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      openHelpModal();
    }
  };

  return (
    <HelpModalWrap onClick={handleOverlayClick}>
      <StyledModal className="modal">
        <HelpCloseBtn onClick={openHelpModal} type="button">
          <CloseModal />
        </HelpCloseBtn>
        <div>
          <HelpTitle>Need help</HelpTitle>
          <HelpForm>
            <HelpInput type="text" placeholder="Email address" />

            <HelpTextArea
              cols="30"
              rows="10"
              placeholder="Comment"
            ></HelpTextArea>

            <HelpSubmitBtn type="submit">Send</HelpSubmitBtn>
          </HelpForm>
        </div>
      </StyledModal>
    </HelpModalWrap>
  );
};

export default NeedHelpModal;

NeedHelpModal.propTypes = {
  openHelpModal: PropTypes.func,
};
