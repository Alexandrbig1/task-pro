import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import emailRegex from "../../regex/emailRegex";
import { toast } from "react-toastify";
import { requestHelp } from "../../redux/user/operations";
import {
  CloseModal,
  HelpCloseBtn,
  HelpErrorMsg,
  HelpForm,
  HelpInput,
  HelpModalWrap,
  HelpSubmitBtn,
  HelpTextArea,
  HelpTitle,
  StyledModal,
} from "./NeedHelpModal.styled";

const NeedHelpModal = ({ openHelpModal }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

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

    const formData = {
      email,
      comment,
    };

    if (validEmail && validComment) {
      openHelpModal();
      try {
        const responseText = dispatch(requestHelp(formData));
        form.reset();

        toast.success(responseText, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      } catch (err) {
        toast.error("Failed to submit request", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      if (!validEmail) {
        setErrorMessage("Please enter a valid email address!");
      }
      if (!validComment) {
        setErrorMessage("Please enter a comment!");
      }
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
            <HelpErrorMsg>{errorMessage}</HelpErrorMsg>
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
    </HelpModalWrap>
  );
};

export default NeedHelpModal;

NeedHelpModal.propTypes = {
  openHelpModal: PropTypes.func,
};
