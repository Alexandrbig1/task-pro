import { GoogleWrapper, IconGoogle } from "./GoogleIcon.styled";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function GoogleIcon({ handleGoogleIconClick }) {
  // function handleGoogleAuth() {
  //   console.log("google");
  // }
  return (
    <GoogleWrapper onClick={handleGoogleIconClick}>
      {/* <GoogleWrapper onClick={handleGoogleAuth}> */}
      {/* <a
        href="https://task-backend-project.onrender.com/auth/google"
        target="_self"
      > */}
      <IconGoogle />
      {/* </a> */}
    </GoogleWrapper>
  );
}

GoogleIcon.propTypes = {
  handleGoogleAuth: PropTypes.func,
};
