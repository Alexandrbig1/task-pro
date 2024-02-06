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
import emailRegex from "../../regex/emailRegex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [openHelpModal]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      openHelpModal();
    }
  };

  const onSubmitClick = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const comment = form.elements.comment.value;

    const validEmail = emailRegex.test(email);
    const validComment = comment.length > 0;

    if (validEmail && validComment) {
      openHelpModal();
      form.reset();
    } else {
      toast.error("Please provide a valid email and a comment.");
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
          <HelpForm onSubmit={onSubmitClick}>
            <HelpInput name="email" type="text" placeholder="Email address" />
            <HelpTextArea
              cols="30"
              rows="10"
              name="comment"
              placeholder="Enter your message"
            ></HelpTextArea>
            <HelpSubmitBtn type="submit">Send</HelpSubmitBtn>
          </HelpForm>
        </div>
      </StyledModal>

      <ToastContainer />
    </HelpModalWrap>
  );
};

export default NeedHelpModal;

NeedHelpModal.propTypes = {
  openHelpModal: PropTypes.func,
};
