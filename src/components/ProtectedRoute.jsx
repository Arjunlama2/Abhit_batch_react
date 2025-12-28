import React from "react";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
    console.log("from Protected")
// const token=localStorage.getItem("token")

let isAuthenticated=true
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
