import { useEffect } from "react";

import {
  HelpCloseBtn,
  HelpForm,
  HelpInput,
  HelpModalWrap,
  HelpSubmitBtn,
  HelpTextArea,
  HelpTitle,
  StyledModal,
} from "./NeedHelpModal.styled";

import PropTypes from "prop-types";

const NeedHelpModal = ({ openHelpModal }) => {
  NeedHelpModal.propTypes = {
    openHelpModal: PropTypes.func,
  };

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
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5L4.5 13.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 4.5L13.5 13.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
