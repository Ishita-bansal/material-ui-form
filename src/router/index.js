import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, Dashboard } from "../Pages";

const PrivateRoute = ({ element }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return userData?.isLoggedIn ? element : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
