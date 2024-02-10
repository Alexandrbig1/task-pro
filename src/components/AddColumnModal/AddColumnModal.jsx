import { useEffect } from "react";
import { useDispatch } from "react-redux"; ///dispatch
import { addColumn } from "../../redux/columns/operations";
import PropTypes from "prop-types";
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const AddColumnModal = ({ openColumnModal }) => {
  const dispatch = useDispatch();

  const { board } = useSelector((state) => state.boards.boards.current);

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

  const onSubmitColumnClick = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const title = form.elements.title.value.trim();

    const validTitle = title.length > 0;

    if (validTitle) {
      const newColumn = {
        titleColumn: title,
        boardId: board._id,
      };
      dispatch(addColumn(newColumn)); // Диспатч action з назвою колонки
      form.reset();
      openColumnModal();
      toast.success("You are successful add column!", {
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
    <AddModalWrap onClick={handleModalClick}>
      <StyledAddModal className="modal">
        <AddColumnModalBtn onClick={openColumnModal} type="button">
          <CloseAddColumnModal />
        </AddColumnModalBtn>
        <div>
          <AddColumnTitle>Add column</AddColumnTitle>
          <AddColumnForm onSubmit={onSubmitColumnClick}>
            <AddColumnInput type="text" placeholder="Title" name="title" />
            <CardButton type="submit" btnText="Add" />
          </AddColumnForm>
        </div>
      </StyledAddModal>
    </AddModalWrap>
  );
};

export default AddColumnModal;

AddColumnModal.propTypes = {
  openColumnModal: PropTypes.func.isRequired,
};

// import { useEffect } from "react";
// import { PropTypes } from "prop-types";
// import {
//   AddModalWrap,
//   StyledAddModal,
//   AddColumnModalBtn,
//   CloseAddColumnModal,
//   AddColumnTitle,
//   AddColumnForm,
//   AddColumnInput,
// } from "../AddColumnModal/AddColumnModal.styled";
// import { CardButton } from "../CardButton/CardButton";

// const AddColumnModal = ({ openColumnModal }) => {
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (e.code === "Escape") {
//                 openColumnModal();
//             }
//         };

//         window.addEventListener("keydown", handleKeyDown);
//         document.body.style.overflow = "hidden";

//         return () => {
//             window.removeEventListener("keydown", handleKeyDown);
//             document.body.style.overflow = "auto";
//         };
//     }, [openColumnModal]);

//     const handleModalClick = (e) => {
//         if (e.target === e.currentTarget) {
//             openColumnModal();
//         }
//     };
//     return (
//       <AddModalWrap onClick={handleModalClick}>
//         <StyledAddModal className="modal">
//           <AddColumnModalBtn onClick={openColumnModal} type="button">
//             <CloseAddColumnModal />
//           </AddColumnModalBtn>
//           <div>
//             <AddColumnTitle>Add column</AddColumnTitle>
//             <AddColumnForm>
//               <AddColumnInput type="text" placeholder="Title" />
//               <CardButton btnText="Add" />
//             </AddColumnForm>
//           </div>
//         </StyledAddModal>
//       </AddModalWrap>
//     );
// };

// export default AddColumnModal;

// AddColumnModal.propTypes = {
//   openColumnModal: PropTypes.func,
// };

// // import { useEffect } from "react";
// // import  PropTypes  from "prop-types";
// // import {
// //   AddModalWrap,
// //   StyledAddModal,
// //   AddColumnModalBtn,
// //   CloseAddColumnModal,
// //   AddColumnTitle,
// //   AddColumnForm,
// //   AddColumnInput,
// // } from "../AddColumnModal/AddColumnModal.styled";
// // import { CardButton } from "../CardButton/CardButton";

// // const AddColumnModal = ({ openColumnModal }) => {
// //     useEffect(() => {
// //         const handleKeyDown = (e) => {
// //             if (e.code === "Escape") {
// //                 openColumnModal();
// //             }
// //         };

// //         window.addEventListener("keydown", handleKeyDown);
// //         document.body.style.overflow = "hidden";

// //         return () => {
// //             window.removeEventListener("keydown", handleKeyDown);
// //             document.body.style.overflow = "auto";
// //         };
// //     }, [openColumnModal]);

// //     const handleModalClick = (e) => {
// //         if (e.target === e.currentTarget) {
// //             openColumnModal();
// //         }
// //     };
// //     return (
// //       <AddModalWrap onClick={handleModalClick}>
// //         <StyledAddModal className="modal">
// //           <AddColumnModalBtn onClick={openColumnModal} type="button">
// //             <CloseAddColumnModal />
// //           </AddColumnModalBtn>
// //           <div>
// //             <AddColumnTitle>Add column</AddColumnTitle>
// //             <AddColumnForm>
// //               <AddColumnInput type="text" placeholder="Title" />
// //               <CardButton btnText="Add" />
// //             </AddColumnForm>
// //           </div>
// //         </StyledAddModal>
// //       </AddModalWrap>
// //     );
// // };

// // export default AddColumnModal;

// // AddColumnModal.propTypes = {
// //   openColumnModal: PropTypes.func,
// // };

// //Connect

// // import React, { useState } from 'react';
// // import AddColumnModal from './AddColumnModal'; // Імпортуйте ваш компонент модального вікна

// // const YourComponent = () => {
// //   // Стан для управління видимістю модального вікна
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   // Функція для відкриття та закриття модального вікна
// //   const toggleModal = () => {
// //     setIsModalOpen(!isModalOpen);
// //   };

// //   return (
// //     <div>
// //       {/* Кнопка для відкриття модального вікна */}
// //       <button onClick={toggleModal}>Add another column</button>

// //       {/* Модальне вікно, яке відображається на основі стану isModalOpen */}
// //       {isModalOpen && <AddColumnModal openAddColumnModal={toggleModal} />}
// //     </div>
// //   );
// // };

// // export default YourComponent;
