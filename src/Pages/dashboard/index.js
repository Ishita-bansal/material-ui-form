import React from "react";
import {useNavigate} from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();
   
    const handleLogout=()=>{
    localStorage.clear();

        navigate('/register')
    }
    return(
        <>
        <h1>Student Data</h1>
        <button onClick={handleLogout}>logout</button>
        </>
    )
}

export default Dashboard;