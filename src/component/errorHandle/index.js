import React from "react";

const ErrorHandle = ({ touched, errors, fieldName }) => {
  return (
    <>
      {touched?.[fieldName] && errors?.[fieldName] ? (
        <p className="showerror">{errors?.[fieldName]}</p>
      ) : (
        <p style={{ visibility: "hidden" }} className="showerror">
          text
        </p>
      )}
    </>
  );
};

export default ErrorHandle;
