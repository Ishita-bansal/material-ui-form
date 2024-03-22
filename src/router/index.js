import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register, Dashboard ,Login , Page404 , Profile} from "../Pages";

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

        <Route path="/*" element={<Page404/>} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
