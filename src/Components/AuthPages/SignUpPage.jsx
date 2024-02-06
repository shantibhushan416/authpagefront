import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticateSignup } from "../../services/api";

const signUpIntialValues = {
  full_name: "",
  email: "",
  password: "",
  phone: "",
};

const SignUpPage = () => {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState(signUpIntialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(false);

  const onHandleChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    console.log(signUp);
  };

  const signupUser = async (e) => {
    e.preventDefault();
    setFormErrors(validate(signUp));
    setIsSubmit(true);

    let response = await authenticateSignup(signUp);
    if (response) {
      navigate("/signin");
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(signUpIntialValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.full_name) {
      errors.full_name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div>
      <h1>Sign up</h1>

      <form
        onSubmit={signupUser}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          style={{
            border: "2px solid black",
            borderRadius: "4px",
            padding: "10px",
            width: 500,
          }}
          type="text"
          placeholder="Name"
          name="full_name"
          value={signUp.full_name}
          onChange={(e) => onHandleChange(e)}
        />
        <p style={{ color: "red" }}>{formErrors.full_name}</p>
        <input
          style={{
            border: "2px solid black",
            borderRadius: "4px",
            padding: "10px",
            width: 500,
          }}
          type="email"
          placeholder="Email"
          name="email"
          value={signUp.email}
          onChange={(e) => onHandleChange(e)}
        />
        <p style={{ color: "red" }}>{formErrors.email}</p>

        <input
          style={{
            border: "2px solid black",
            borderRadius: "4px",
            padding: "10px",
            width: 500,
          }}
          type="number"
          placeholder="Phone"
          name="phone"
          value={signUp.phone}
          onChange={(e) => onHandleChange(e)}
        />
        <p style={{ color: "red" }}>{formErrors.phone}</p>

        <input
          style={{
            border: "2px solid black",
            borderRadius: "4px",
            padding: "10px",
            width: 500,
          }}
          type="password"
          placeholder="Password"
          name="password"
          value={signUp.password}
          onChange={(e) => onHandleChange(e)}
        />
        <p style={{ color: "red" }}>{formErrors.password}</p>
        {error && (
          <p style={{ color: "red" }}>
            Please enter valid username or password
          </p>
        )}
        <button
          style={{ padding: "5px", borderRadius: "5px", fontSize: "large" }}
        >
          Sign Up
        </button>
      </form>
      <br />
      <p>Or</p>
      <Link
        to="/signin"
        style={{ textDecoration: "none", color: "lightgreen" }}
      >
        Sign In
      </Link>
    </div>
  );
};

export default SignUpPage;
