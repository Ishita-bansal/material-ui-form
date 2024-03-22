import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Page404() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          width: "500px",
          padding:"20px",
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
        }}
      >
        <div style={{backgroundColor:"grey"}}>
          <h1 style={{ textAlign: "center" }}>Page is not found</h1>
          <div 
            style={{
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              padding:"30px"
            }}
          >
            <Button
              style={{ width: "150px" }}
              variant="contained"
              color="success"
              onClick={() => {
                navigate("/register");
              }} >
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
