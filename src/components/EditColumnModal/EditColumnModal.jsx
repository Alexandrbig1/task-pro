import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropTypes } from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CardButton } from "../CardButton/CardButton";
import { editColumn } from "../../redux/columns/operations";
import { getBoardById } from "../../redux/boards/operations";
import { selectCurrentBoard } from "../../redux/boards/selectors";
import { createPortal } from "react-dom";
import {
  EditModalWrap,
  StyledEditModal,
  EditColumnModalBtn,
  EditColumnTitle,
  EditColumnForm,
  EditColumnInput,
  CloseEditColumnModal,
  ErrorMessage,
} from "../EditColumnModal/EditColumnModal.styled";

const EditColumnModal = ({ openEditColumnModal, columnId, initialTitle }) => {
  const [title, setTitle] = useState(initialTitle);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const { board } = useSelector(selectCurrentBoard);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        openEditColumnModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [openEditColumnModal]);

  const handleEditModalClick = (e) => {
    if (e.target === e.currentTarget) {
      openEditColumnModal();
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length > 25) {
      setError("Title must be 25 characters or less");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length === 0 || title.length > 25) {
      setError("Please enter a valid title up to 25 characters");
      return;
    }
    const newColumnData = {
      titleColumn: title,
    };
    await dispatch(editColumn({ columnId, newColumnData }));
    dispatch(getBoardById(board._id));
    openEditColumnModal();
    toast.success("You have successfully edited the column!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return createPortal(
    <EditModalWrap onClick={handleEditModalClick}>
      <StyledEditModal className="modal">
        <EditColumnModalBtn onClick={() => openEditColumnModal()} type="button">
          <CloseEditColumnModal />
        </EditColumnModalBtn>
        <div>
          <EditColumnTitle>Edit column</EditColumnTitle>
          <EditColumnForm onSubmit={handleSubmit}>
            <EditColumnInput
              autoFocus
              type="text"
              placeholder="To Do"
              name="title"
              value={title}
              onChange={handleChange}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <CardButton btnText="Add" />
          </EditColumnForm>
        </div>
      </StyledEditModal>
    </EditModalWrap>,
    document.getElementById("modal-root")
  );
};

export default EditColumnModal;

EditColumnModal.propTypes = {
  openEditColumnModal: PropTypes.func,
  columnId: PropTypes.string,
  initialTitle: PropTypes.string,
};
