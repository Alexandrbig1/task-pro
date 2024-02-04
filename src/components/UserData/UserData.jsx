import { useEffect, useState } from "react";
import {
    AvatarBtn,
    AvatarIcon,
    AvatarText,
    AvatarWrapper,
} from "./UserData.styled";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

export default function UserData() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    function toggleModal() {
        setIsOpenModal((prevState) => !prevState);
    }

    return (
        <>
            <AvatarWrapper>
                <AvatarText>John</AvatarText>
                <AvatarBtn onClick={() => toggleModal()}>
                    <AvatarIcon>
                        <use href="images/icons.svg#icon-userAvatarDefault"></use>
                    </AvatarIcon>
                </AvatarBtn>
            </AvatarWrapper>
            {isOpenModal && <EditProfileModal toggleModal={toggleModal} />}
        </>
    );
}
