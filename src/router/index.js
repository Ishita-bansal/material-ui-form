import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register, Dashboard ,Login} from "../Pages";

const PrivateRoute = ({ element }) => {
  const userData = JSON.parse(localStorage.getItem("loggedUser"));
  return userData?.isLoggedIn ? element : <Navigate to="/register" />;
};

const PublicRoute = ({element}) =>{
  const userData = JSON.parse(localStorage.getItem("loggedUser"));
  return !userData?.isLoggedIn ? element : <Navigate to="/dashboard" />;
}

const Router = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route
         path="/Register" element={<PublicRoute element={<Register />} /> }
         />

        <Route 
        path="/login" 
        element ={<PublicRoute element ={<Login/>} />} />
        
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
