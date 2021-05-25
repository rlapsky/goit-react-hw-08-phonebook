import React from "react";
import { useField } from "formik";
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        {label}
        <input
          {...field}
          {...props}
        />
      </label>
      {meta.touched && meta.error ? (
        <p>{meta.error}</p>
      ) : null}
    </>
  );
};

export default TextInput;
