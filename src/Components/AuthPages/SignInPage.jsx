import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { authenticateLogIn } from "../../services/api";

const loginIntialValues = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(loginIntialValues);
  const [error, setError] = useState(false);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogIn(login);
    console.log(response);
    if (response.status === 200) {
      navigate("/");
      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.data?.token)
      );
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          style={{
            marginBottom: "5px",
            border: "2px solid black",
            borderRadius: "4px",
            padding: "10px",
            width: 500,
          }}
          type="Email"
          placeholder="Email"
          name="email"
          onChange={(e) => onValueChange(e)}
        />

        <input
          style={{
            marginBottom: "5px",
            border: "2px solid black",
            borderRadius: "4px",
            padding: "10px",
            width: 500,
          }}
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => onValueChange(e)}
        />
        {error && (
          <p style={{ color: "red" }}>
            Please enter valid username or password
          </p>
        )}
        <button
          style={{ padding: "5px", borderRadius: "5px", fontSize: "large" }}
          onClick={loginUser}
        >
          Sign In
        </button>
      </div>
      <br />
      <p>Or</p>
      <Link
        to="/signup"
        style={{ textDecoration: "none", color: "lightgreen" }}
      >
        Sign up
      </Link>
    </div>
  );
};

export default SignInPage;
