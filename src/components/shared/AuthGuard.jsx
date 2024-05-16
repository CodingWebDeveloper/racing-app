import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
