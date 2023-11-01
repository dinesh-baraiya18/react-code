import * as Yup from "yup";

export const signUpFormValid = Yup.object({
  name: Yup.string().min(2).required("Please enter at least 2 characters"),
  email: Yup.string().email().required("Please enter a valid email"),
  password: Yup.string()
    .min(6)
    .required("Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});
