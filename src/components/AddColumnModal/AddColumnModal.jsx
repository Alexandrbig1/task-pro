import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CardButton } from "../CardButton/CardButton";
import "react-toastify/dist/ReactToastify.css";
import { createPortal } from "react-dom";
import {
  AddModalWrap,
  StyledAddModal,
  AddColumnModalBtn,
  CloseAddColumnModal,
  AddColumnTitle,
  AddColumnForm,
  AddColumnInput,
  ErrorMessage,
} from "../AddColumnModal/AddColumnModal.styled";

const AddColumnModal = ({
  errorMessageSub,
  setErrorMessageSub,
  openColumnModal,
  onSubmitColumnClick,
  setErrUniqueTitle,
  errUniqueTitle,
  errShort,
  setErrShort,
}) => {
  const [errInput, setErrInput] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        openColumnModal();
        setErrorMessageSub(false);
        setErrUniqueTitle(false);
        setErrShort(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [openColumnModal, setErrorMessageSub, setErrUniqueTitle, setErrShort]);

  const ErrShow = (e) => {
    setErrInput(e.target.value);
    setErrorMessageSub(false);
    setErrUniqueTitle(false);
    setErrShort(false);
  };
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      openColumnModal();
      setErrorMessageSub(false);
      setErrUniqueTitle(false);
      setErrShort(false);
    }
  };
  const err = errorMessageSub || errShort || errUniqueTitle;
  return createPortal(
    <AddModalWrap onClick={handleModalClick}>
      <StyledAddModal className="modal">
        <AddColumnModalBtn onClick={openColumnModal} type="button">
          <CloseAddColumnModal />
        </AddColumnModalBtn>
        <div>
          <AddColumnTitle>Add column</AddColumnTitle>
          <AddColumnForm onSubmit={onSubmitColumnClick}>
            {errorMessageSub && (
              <ErrorMessage>Please fill the title field</ErrorMessage>
            )}
            {errShort && <ErrorMessage>Too Short</ErrorMessage>}
            {errUniqueTitle && (
              <ErrorMessage>Please enter a unique value</ErrorMessage>
            )}
            <AddColumnInput
              $isError={err}
              autoFocus
              type="text"
              placeholder="Title"
              name="title"
              maxLength={25}
              onChange={ErrShow}
            />
            <CardButton type="submit" btnText="Add" />
          </AddColumnForm>
        </div>
      </StyledAddModal>
    </AddModalWrap>,
    document.getElementById("modal-root")
  );
};

export default AddColumnModal;

AddColumnModal.propTypes = {
  openColumnModal: PropTypes.func.isRequired,
  onSubmitColumnClick: PropTypes.func.isRequired,
  errorMessageSub: PropTypes.bool,
};
