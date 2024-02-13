import { useDispatch } from "react-redux";
import { GoogleIcon } from "./Google.styled";
import { googleAuth } from "../../redux/auth/operations";

export default function Google() {
  const dispatch = useDispatch();

  const handleGoogleLogin = async (googleResponse) => {
    try {
      const googleToken = googleResponse.token;

      await dispatch(googleAuth(googleToken));
    } catch (error) {
      console.error("Error during Google authentication:", error);
    }
  };

  return (
    // <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <GoogleIcon
      // onSuccess={handleGoogleLogin}
      // onFailure={(error) => console.error("Google login failed:", error)}
      onClick={handleGoogleLogin}
    />
    // </GoogleOAuthProvider>
  );
}
