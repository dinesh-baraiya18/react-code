import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import { signUpFormValid } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Form = () => {
  const singUpForm = useFormik({
    initialValues: initialValues,
    validationSchema: signUpFormValid,
    onSubmit: (val) => {
      console.log(val);
    },
  });
  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    singUpForm;
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {errors.name && touched.name ? (
          <p className="text-danger mb-0">{errors.name}</p>
        ) : null}
        <br />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {errors.email && touched.email ? (
          <p className="text-danger mb-0">{errors.email}</p>
        ) : null}
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {errors.password && touched.password ? (
          <p className="text-danger mb-0">{errors.password}</p>
        ) : null}
        <br />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {errors.confirmPassword && touched.confirmPassword ? (
          <p className="text-danger mb-0">{errors.confirmPassword}</p>
        ) : null}
        <br />
        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;

  input {
    margin-bottom: 20px;
    padding: 5px;
  }
`;
