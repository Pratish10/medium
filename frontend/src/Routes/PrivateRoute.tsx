import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/signin" />;
};
