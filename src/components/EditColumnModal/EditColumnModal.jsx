import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  EditModalWrap,
  StyledEditModal,
  EditColumnModalBtn,
  EditColumnTitle,
  EditColumnForm,
  EditColumnInput,
  CloseEditColumnModal,
} from "../EditColumnModal/EditColumnModal.styled";
import { CardButton } from "../CardButton/CardButton";
import { editColumn } from "../../redux/columns/operations";

const EditColumnModal = ({ openEditColumnModal, columnId, title }) => {
  const dispatch = useDispatch();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const title = form.elements.title.value.trim();

    const validTitle = title.length > 0;

    if (validTitle) {
      const newColumnData = {
        titleColumn: title,
      };
      dispatch(editColumn({ columnId, newColumnData }));
      form.reset();
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
    } else {
      toast.error("Please enter a title", {
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
  };

  return (
    <EditModalWrap onClick={handleEditModalClick}>
      <StyledEditModal className="modal">
        <EditColumnModalBtn onClick={() => openEditColumnModal()} type="button">
          <CloseEditColumnModal />
        </EditColumnModalBtn>
        <div>
          <EditColumnTitle>Edit column</EditColumnTitle>
          <EditColumnForm onSubmit={handleSubmit}>
            <EditColumnInput
              type="text"
              placeholder="To Do"
              name="title"
              defaultValue={title}
            />
            <CardButton btnText="Add" />
          </EditColumnForm>
        </div>
      </StyledEditModal>
    </EditModalWrap>
  );
};

export default EditColumnModal;

EditColumnModal.propTypes = {
  openEditColumnModal: PropTypes.func,
  columnId: PropTypes.string,
  title: PropTypes.string,
};

//Connect

// import React, { useState } from 'react';
// import EditColumnModal from './EditColumnModal'; // Імпортуйте ваш компонент модального вікна

// const YourComponent = () => {
//   // Стан для управління видимістю модального вікна
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Функція для відкриття та закриття модального вікна
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div>
//       {/* Кнопка для відкриття модального вікна */}
//       <button onClick={toggleModal}>Add another column</button>

//       {/* Модальне вікно, яке відображається на основі стану isModalOpen */}
//       {isModalOpen && <EditColumnModal openEditColumnModal={toggleModal} />}
//     </div>
//   );
// };

// export default YourComponent;
