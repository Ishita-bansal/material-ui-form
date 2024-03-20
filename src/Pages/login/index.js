import React from 'react';
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { ErrorHandle } from "../../component/index";
import { useNavigate } from "react-router-dom";

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const defaultvalues ={
    email:"",
    password:""                                       
}

const validationSchema = yup.object().shape({
   
    email: yup
      .string()
      .matches(emailRegExp, "Email is not valid")
      .required("Required*"),
    password: yup
      .string()
      .min(4, "Password must be of 4 chartacters")
      .required("Required*")
  });

function Login(){

    const navigate = useNavigate();                                
    const  onSubmit = (values) =>{
        console.log("values=",values);
       const loggeduser = JSON.parse(localStorage.getItem("userData"));
       console.log("logged user=",loggeduser);
       if(values.email === loggeduser.email && values.password === loggeduser.password && loggeduser.isLoggedIn===true){
         navigate('/dashboard');
       }
       else{
        alert("data is not valid");
       }
     

    }
 

    const formik = useFormik({
        initialValues:defaultvalues,
        onSubmit:onSubmit,
        validationSchema:validationSchema
      })
   
      const {  setFieldValue,setTouched ,touched , errors,values , handleSubmit} = formik;
    return(
        <div class="formcontain">
        <form className="contain" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={values.email}
          onChange={(e) => setFieldValue("email", e.target.value)}
          onBlur={() => setTouched({ ...touched, email: true })}
        />
        <ErrorHandle touched={touched} errors={errors} fieldName="email" />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={values.password}
          onChange={(e) => setFieldValue("password", e.target.value)}
          onBlur={() => setTouched({ ...touched, password: true })}
        />
        <ErrorHandle touched={touched} errors={errors} fieldName="password" />

        <Button variant="contained" color="primary" type="submit">
            {" "}
           Login
          </Button>
        </form>
     </div> 
    )
}

export default Login;