import React from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import { TOAST_MESSAGE } from "../../constants";
function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    toast.success(TOAST_MESSAGE.LOGOUT);
    navigate("/login");
  };
  return (
    <>
      <h1>Student Data</h1>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}

export default Dashboard;
