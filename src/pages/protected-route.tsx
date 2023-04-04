import { FC } from "react";
import { Location, Navigate, useLocation } from "react-router-dom";

type TProtectedRoute = {
  children: JSX.Element;
  notAuth?: boolean;
};

const ProtectedRoute: FC<TProtectedRoute> = ({ children, notAuth = false }) => {
  const location: Location = useLocation();
  const token = localStorage.getItem("x-auth");

  const from: string = location.state?.from || "/";

  if (token && notAuth) {
    return <Navigate to={from} />;
  }

  if (!token && !notAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export { ProtectedRoute };
