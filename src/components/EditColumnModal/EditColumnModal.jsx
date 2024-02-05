import { useEffect } from "react";
import { PropTypes } from "prop-types";
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

const EditColumnModal = ({ openEditColumnModal }) => {
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
  return (
    <EditModalWrap onClick={handleEditModalClick}>
      <StyledEditModal className="modal">
        <EditColumnModalBtn onСlick={openEditColumnModal} type="button">
          <CloseEditColumnModal />
        </EditColumnModalBtn>
        <div>
          <EditColumnTitle>Edit column</EditColumnTitle>
          <EditColumnForm>
            <EditColumnInput type="text" placeholder="To Do" />
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
