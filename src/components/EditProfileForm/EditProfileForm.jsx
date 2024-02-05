import { useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import {
    BtnPlus,
    BtnSubmit,
    LabelAvatar,
    StyledForm,
    UpdateAvatar,
    WrapperUpdateAvatar,
    BtnWrapper,
    InputForm,
    Label,
    InputNthChild,
} from "./EditProfileForm.styled";

let EMAIL_REGX = `^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/`;

const editProfileSchema = Yup.object().shape({
    avatar: Yup.string(),
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!"),
    email: Yup.string().matches(EMAIL_REGX, "Invalid email address"),
    password: Yup.string()
        .min(8, "Must Contain 8 Characters")
        .required()
        .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
        .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
        .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
        .matches(
            /^(?=.*[!@#\$%\^&\*])/,
            "  Must Contain  One Special Case Character"
        ),
});

const onSubmit = (values) => {
    console.log(values);
};

export default function ProfileForm() {
    const [avatarPreview, setAvatarPreview] = useState(
        "images/VectorExample.png"
    );
    return (
        <Formik
            initialValues={{
                avatar: avatarPreview,
                name: "",
                email: "",
                password: "",
            }}
            validationSchema={editProfileSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <StyledForm>
                    <WrapperUpdateAvatar>
                        <UpdateAvatar
                            src={
                                avatarPreview
                                // || user?.avatar
                            }
                        />
                    </WrapperUpdateAvatar>

                    <div>
                        <LabelAvatar htmlFor="button-file">
                            <BtnWrapper>
                                <BtnPlus />
                            </BtnWrapper>
                            <input
                                name="avatar"
                                accept="image/*"
                                id="button-file"
                                type="file"
                                hidden
                                onChange={(e) => {
                                    const fileReader = new FileReader();
                                    fileReader.onload = () => {
                                        if (fileReader.readyState === 2) {
                                            setAvatarPreview(fileReader.result);
                                        }
                                    };
                                    if (e.target.files[0]) {
                                        fileReader.readAsDataURL(
                                            e.target.files[0]
                                        );
                                    }
                                }}
                            />
                        </LabelAvatar>
                    </div>

                    <Label>
                        <InputForm type="text" name="name" />
                        <ErrorMessage name="name" />
                    </Label>
                    <Label>
                        <InputForm type="text" name="email" />
                        <ErrorMessage name="email" />
                    </Label>
                    <Label>
                        <InputNthChild
                            type="password"
                            name="password"
                            className="nth-child"
                        />
                        <ErrorMessage name="password" />
                    </Label>

                    <BtnSubmit type="submit">Submit</BtnSubmit>
                </StyledForm>
            </Form>
        </Formik>
    );
}
