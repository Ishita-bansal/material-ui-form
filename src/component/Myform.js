import "./style.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useFormik } from "formik";
import * as yup from 'yup';
import React,{useState} from 'react';

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const defaultvalues = {
      name:'',
      email:'',
      password:'',
      confirmpass:'',
      checked:'false'
      
};

const validationSchema = yup.object().shape({
    name: yup.string().max(20, "Name must be less than 20 letters").required("Required*"),
    email:yup.string().matches(emailRegExp, "Email is not valid").required("Required*"),
    password:yup.string().min(8,"Password must be of 8 chartacters").required("Required*"),
    confirmpass:yup.string().oneOf([yup.ref("password")],"password must match").required("Required*"),
    checked: yup.boolean().oneOf([true], "You must agree to the terms and conditions").required("Required*")
  });


     
function MyForm(){

 const onSubmit = (values)=>{
     console.log(values);
    //  console.log(errors);
 }

  const formik = useFormik({
    initialValues: defaultvalues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    enableReinitialize:true
  });

  const { values, handleSubmit,handleBlur,errors,touched,setFieldValue} = formik;
      return(
      <div class="formcontain">
        <form className='contain' onSubmit={handleSubmit}>
           <TextField  label="Name" type="text" varient="outlined" fullWidth margin="normal" values="name" onChange={(e)=>setFieldValue("name",e.target.value)} onBlur={handleBlur}/>
           {
            touched.name && errors.name ? <p className="showerror">{errors.name}</p> : <p style={{visibility:"hidden"}} className="showerror">text</p>
           }
           <TextField  label="Email" type="email" varient="outlined" fullWidth margin="normal" values="email"  onChange={(e)=>setFieldValue("email",e.target.value)} onBlur={handleBlur}/>
           {
            touched.email && errors.email ? <p className="showerror">{errors.email}</p> : <p style={{visibility:"hidden"}} className="showerror">email</p>
           }
           <TextField label="Password" type="password" varient="outlined" fullWidth margin="normal" values="password" onChange={(e)=>setFieldValue("password",e.target.value)} onBlur={handleBlur}/>
           {
            touched.password && errors.password ? <p className="showerror">{errors.password}</p>: <p style={{visibility:"hidden"}} className="showerror">password</p>
           }
           <TextField label="Confirm Password" type="password" varient="outlined" fullWidth margin="normal" values="confirmpass" onChange={(e)=>setFieldValue("confirmpass",e.target.value)} onBlur={handleBlur}/>
           {
            touched.confirmpass && errors.confirmpass ? <p className="showerror">{errors.confirmpass}</p>:<p style={{visibility:"hidden"}} className="showerror">password</p>
           }
           <FormGroup>
               <FormControlLabel control={<Checkbox checked={values.checked} onChange={() => setFieldValue("checked", !values.checked)} onBlur={handleBlur} />} label="I agree to the terms and conditions" />
          </FormGroup>
          {
            touched.checked && errors.checked? <p className="showerror">{errors.checked}</p>: <p style={{visibility:"hidden"}} className="showerror">checked</p>
          }
          <div class="uibtn">
           <Button variant="contained" color="primary" type="submit"> Submit</Button>
           </div>
        </form>
        </div>    
      )
}

export default MyForm;