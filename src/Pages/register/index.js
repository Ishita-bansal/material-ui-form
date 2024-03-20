import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { ErrorHandle } from "../../component/index";
import { useNavigate } from "react-router-dom";

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const defaultvalues = {
  name: "",
  email: "",
  password: "",
  confirmpass: "",
  checked: false,
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .max(20, "Name must be less than 20 letters")
    .required("Required*"),
  email: yup
    .string()
    .matches(emailRegExp, "Email is not valid")
    .required("Required*"),
  password: yup
    .string()
    .min(4, "Password must be of 4 chartacters")
    .required("Required*"),
  confirmpass: yup
    .string()
    .oneOf([yup.ref("password")], "password must match")
    .required("Required*"),
  checked: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("Required*"),
});

function Register() {

  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log("Form values:", values);
    localStorage.setItem(
      "userData",
      JSON.stringify({...values,isLoggedIn:true})
    );
    navigate("/login");
  };

  const formik = useFormik({
    initialValues: defaultvalues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    enableReinitialize: true,
  });

  const {
    values,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    setTouched,
  } = formik;
  return (
    <div class="formcontain">
      <form className="contain" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          varient="outlined"
          fullWidth
          margin="normal"
          value={values.name}
          onChange={(e) => setFieldValue("name", e.target.value)}
          onBlur={() => setTouched({ ...touched, name: true })}
        />
        <ErrorHandle touched={touched} errors={errors} fieldName="name" />

        <TextField
          label="Email"
          type="email"
          varient="outlined"
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
          varient="outlined"
          fullWidth
          margin="normal"
          value={values.password}
          onChange={(e) => setFieldValue("password", e.target.value)}
          onBlur={() => setTouched({ ...touched, password: true })}
        />
        <ErrorHandle touched={touched} errors={errors} fieldName="password" />

        <TextField
          label="Confirm Password"
          type="password"
          varient="outlined"
          fullWidth
          margin="normal"
          value={values.confirmpass}
          onChange={(e) => setFieldValue("confirmpass", e.target.value)}
          onBlur={() => setTouched({ ...touched, confirmpass: true })}
        />
        <ErrorHandle
          touched={touched}
          errors={errors}
          fieldName="confirmpass"
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.checked}
                onChange={() => setFieldValue("checked", !values.checked)}
                onBlur={handleBlur}
              />
            }
            label="I agree to the terms and conditions"
          />
        </FormGroup>
        <ErrorHandle touched={touched} errors={errors} fieldName="checked" />

        <div class="uibtn">
          <Button variant="contained" color="primary" type="submit">
        
          Register
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
