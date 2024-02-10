import { GoogleWrapper, GoogleIcon } from "./GoogleIcon.styled";
import PropTypes from "prop-types";

export default function Google() {
  function handleGoogleAuth() {
    console.log("google");
  }
  return (
    <GoogleWrapper onClick={handleGoogleAuth}>
      <GoogleIcon />
    </GoogleWrapper>
  );
}

Google.propTypes = {
  handleGoogleAuth: PropTypes.func,
};
