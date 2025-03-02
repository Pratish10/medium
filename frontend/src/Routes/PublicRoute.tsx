import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <Navigate to="/blogs" /> : <>{children}</>;
};
