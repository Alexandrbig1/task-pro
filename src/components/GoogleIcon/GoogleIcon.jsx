import { GoogleWrapper, GoogleIcon } from "./GoogleIcon.styled";
// import PropTypes from "prop-types";

export default function Google() {
  return (
    <GoogleWrapper>
      <a
        href="https://task-backend-project.onrender.com/auth/google"
        target="_self"
      >
        <GoogleIcon />
      </a>
    </GoogleWrapper>
  );
}

// Google.propTypes = {
//   handleGoogleAuth: PropTypes.func,
// };
