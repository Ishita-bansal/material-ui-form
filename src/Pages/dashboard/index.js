import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOAST_MESSAGE } from "../../constants";
import {
  IconButton,
  Tooltip,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Modal,
  Fade,
  Box,
  Button
} from "@mui/material";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Dashboard() {
  const navigate = useNavigate();

  const loginUser = JSON.parse(localStorage.getItem("loggedUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    toast.success(TOAST_MESSAGE.LOGOUT);
    navigate("/login");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setopen] = useState(false);
  const [openMd, setopenMd] = useState(false);

  const handleMenu = (e) => {
    setAnchorEl(e.target);
    setopen(true);
  };

  const handleclose = () => {
    setAnchorEl(null);
    setopen(false);
  };

  const openModal = () => {
    setopenMd(true);
  };

  const handlecloseMd = () => {
    setopenMd(false);
  };

  
  return (
    <>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Student Data</Typography>
          <Tooltip title="Open settings">
            <IconButton onClick={handleMenu}>
              <Avatar
                sx={{
                  bgcolor: "Primary.main",
                  width: 25,
                  height: 25,
                  fontSize: "14px",
                  textTransform: "capitalize",
                }}
              >
                {loginUser.name?.[0]}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={open} onclick={handleclose}>
            <MenuItem onClick={()=>{navigate('/profile')}}>Profile</MenuItem>
            <MenuItem onClick={openModal}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Modal open={openMd} onClose={handlecloseMd}>
        <Fade in={openMd}>
          <Box sx={style}>
            <Typography style={{textAlign:"center",p:3}}>Are you sure you want to logout?</Typography>
            <Box sx={{display:"flex",justifyContent:"center",gap:"10px",alignItems:"center"}}>
            <Button sx={{width:"50px"}} variant="contained" color="primary" onClick={handleLogout}>Yes</Button>
            <Button sx={{width:"50px"}} variant="contained" color="secondary" onClick={handlecloseMd}>No</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Dashboard;
