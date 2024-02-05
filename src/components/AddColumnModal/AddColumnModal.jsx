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
        <StyledAddModal className="modal">
          <AddColumnModalBtn onClick={openColumnModal} type="button">
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


//Connect

// import React, { useState } from 'react';
// import AddColumnModal from './AddColumnModal'; // Імпортуйте ваш компонент модального вікна

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
//       {isModalOpen && <AddColumnModal openAddColumnModal={toggleModal} />}
//     </div>
//   );
// };

// export default YourComponent;
