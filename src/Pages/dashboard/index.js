import React from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import { TOAST_MESSAGE } from "../../constants";
import {IconButton , Tooltip,Avatar,AppBar, Button, Toolbar, Typography,Stack } from '@mui/material';
function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    toast.success(TOAST_MESSAGE.LOGOUT);
    navigate("/login");
  };
  const handleMenu = () =>{

  }
  return (
    <>
    <AppBar>
    <Toolbar>
      <Typography>Student Data</Typography>
  
      <Tooltip title="Open settings">
              <IconButton onClick={handleMenu} >  
          <Avatar sx={{bgcolor:"Primary.main",width:50,height:50}}>
               IB
          </Avatar>
      </IconButton>
    </Tooltip>
   
      
    
    </Toolbar>
      </AppBar>
        <Button  variant="contained" color="warning" onClick={handleLogout}>logout</Button>
    </>
  );
}

export default Dashboard;
