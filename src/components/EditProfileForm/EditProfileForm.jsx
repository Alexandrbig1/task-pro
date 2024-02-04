import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  BtnPlus,
  BtnSubmit,
  LabelAvatar,
  StyledForm,
  UpdateAvatar,
  WrapperUpdateAvatar,
  BtnWrapper,
} from "./EditProfileForm.styled";
// import { FiPlus } from "react-icons/fi";

const editProfileSchema = Yup.object().shape({
  // Определите правила валидации для полей формы
  avatar: Yup.string(),
  name: Yup.string(),
  email: Yup.string(),
  password: Yup.string(),
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
                    fileReader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </LabelAvatar>
          </div>

          <label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </label>
          <label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" />
          </label>
          <label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
          </label>

          <BtnSubmit type="submit">Submit</BtnSubmit>
        </StyledForm>
      </Form>
    </Formik>
  );
}
