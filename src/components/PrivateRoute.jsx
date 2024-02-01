import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
