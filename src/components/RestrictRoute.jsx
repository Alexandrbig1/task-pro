import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
