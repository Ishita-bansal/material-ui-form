import "./style.css";
import Button from "@mui/material/Button";
import { Formik,Form ,Field ,ErrorMessage} from "formik";
import * as yup from "yup";


const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const defaultvalues = {
  name: "",
  email: "",
  password: "",
  confirmpass: "",
//   checked: "false",
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
    .min(8, "Password must be of 8 chartacters")
    .required("Required*"),
  confirmpass: yup
    .string()
    .oneOf([yup.ref("password")], "password must match")
    .required("Required*"),
//   checked: yup
//     .boolean()
//     .oneOf([true], "You must agree to the terms and conditions")
//     .required("Required*"),
});

function Shortform() {
  const onSubmit = (values) => {
    console.log(values);
    console.log("formerrors", values.errors);
  };
  return (
    <Formik  initialValues={defaultvalues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    enableReinitialize={true} 
     class="formcontain">
      <Form className="contain">
        <Field
          placeholder="Name"
          name="name"
          type="text"
          varient="outlined"
          fullWidth
          margin="normal"
        
        />
      <ErrorMessage name="name"/>
        <Field
           placeholder="Email"
          name="email"
          type="email"
          varient="outlined"
          fullWidth
          margin="normal"
       
        />
    <ErrorMessage name="email"/>
        <Field
           placeholder="Password"
          type="password"
          name="password"
          varient="outlined"
          fullWidth
          margin="normal"
         
        />
     <ErrorMessage name="password"/>
        <Field
           placeholder="Confirm Password"
          type="password"
          name="confirmpass"
          varient="outlined"
          fullWidth
          margin="normal"
     
       />
     <ErrorMessage name="confirmpass"/>
        {/* <Field>
           type="Checkbox"
           name="checked"
           <FormControlLabel
            control={
              <Checkbox
              {...Field}
                checked={Field.values}
                onBlur={Field.onBlur}
                // {...getFieldProps('Checkbox')}
              />
            }
            label="I agree to the terms and conditions"
          />
        </Field>
      <ErrorMessage  name="checked"/> */}
        <div class="uibtn">
          <Button variant="contained" color="primary" type="submit">
            {" "}
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

export default Shortform;
