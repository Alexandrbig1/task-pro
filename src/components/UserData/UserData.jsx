import { useState } from "react";
import {
    AvatarBtn,
    AvatarIcon,
    AvatarText,
    AvatarWrapper,
} from "./UserData.styled";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { selectUser } from "../../redux/user/selectors";
import { useSelector } from "react-redux";
// import { useAuth } from "../../hooks";

export default function UserData() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    // const { user } = useAuth();
    const user = useSelector(selectUser);

    function toggleModal() {
        setIsOpenModal((prevState) => !prevState);
    }

    return (
        <>
            <AvatarWrapper>
                <AvatarBtn onClick={() => toggleModal()}>
                    <AvatarText>{user.name}</AvatarText>
                    {/* {user.avatarURL ? (
                        <img src={user.avatarURL} alt="User Avatar" />
                    ) : ( */}
                    <AvatarIcon>
                        <use href="images/icons.svg#icon-userAvatarDefault"></use>
                    </AvatarIcon>
                    {/* )} */}
                </AvatarBtn>
            </AvatarWrapper>
            {isOpenModal && <EditProfileModal toggleModal={toggleModal} />}
        </>
    );
}
