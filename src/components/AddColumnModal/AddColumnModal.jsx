import { useEffect } from "react";
import { PropTypes } from "prop-types";
import {
  AddModalWrap,
  StyledAddModal,
  AddColumnModalBtn,
  CloseAddColumnModal,
  AddColumnTitle,
  AddColumnForm,
  AddColumnInput,
} from "../AddColumnModal/AddColumnModal.styled";
import { CardButton } from "../CardButton/CardButton";

const AddColumnModal = ({ openColumnModal }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === "Escape") {
                openColumnModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [openColumnModal]);

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            openColumnModal();
        }
    };
    return (
      <AddModalWrap onClick={handleModalClick}>
        <StyledAddModal class="modal">
          <AddColumnModalBtn onclick={openColumnModal} type="button">
            <CloseAddColumnModal />
          </AddColumnModalBtn>
          <div>
            <AddColumnTitle>Add column</AddColumnTitle>
            <AddColumnForm>
              <AddColumnInput type="text" placeholder="Title" />
              <CardButton btnText="Add" />
            </AddColumnForm>
          </div>
        </StyledAddModal>
      </AddModalWrap>
    );
};

export default AddColumnModal;

AddColumnModal.propTypes = {
  openColumnModal: PropTypes.func,
};