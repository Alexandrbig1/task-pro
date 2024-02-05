import { useEffect } from "react";
import { PropTypes } from "prop-types";
import { CloseModal } from "../NeedHelpModal/NeedHelpModal.styled";

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
        //HelpModalWrap
            <StyledAddModal class="">
          //StyledModal
                <AddColumnModalBtn onclick={openColumnModal} type="button">
            //HelpCloseBtn
                    <CloseAddColumnModal />
            //CloseModal
                </AddColumnModalBtn>
                <div>
                    <AddColumnTitle>Add column</AddColumnTitle>//HelpTitle
                    <AddColumnForm>
              //HelpForm
                        <AddColumnInput type="text" placeholder="Title" /> HelpInput
                        <AddColumnSubmitBtn type="submit">Add</AddColumnSubmitBtn>
              //HelpSubmitBtn
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