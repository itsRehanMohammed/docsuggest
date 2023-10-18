import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";

const Login = ({ userData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const onChangeHandler = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // let userName;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://mosho.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const data = await response.json();

    if (data.success) {
      toast.success("Logged in successfully!");
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);

      userData();
      setTimeout(() => {
        window.location.href = "http://localhost:3001/login";
      }, 1000);
    } else {
      toast.error(data.message);
    }
  };
  return (
    <>
      <div className="Login">
        <div className="login-form-wrapper">
          <div className="login-head">
            <span className="lock-icon">
              {" "}
              <LockOutlinedIcon />
            </span>
            <h2>Login</h2>
          </div>
          <form action="" onSubmit={handleSubmit} className="form">
            <div className="login-email">
              <TextField required autoComplete="true" onChange={onChangeHandler} value={credentials.email} className="input-email" id="input-email" label="Email" name="email" type="email" />
            </div>
            <div className="login-password">
              <TextField required autoComplete="true" onChange={onChangeHandler} value={credentials.password} type="password" className="input-password" id="input-password" label="Password" name="password" />
            </div>
            <div className="login-button">
              <button type="submit" className="inline-flex items-center justify-center w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                {/* {spinner ? <TailSpin height={25} color="#fff" wrapperStyle={{ justifyContent: "center" }} /> : "LOGIN IN"} */}
                LOGIN{" "}
              </button>
            </div>
            <ToastContainer />
          </form>
          <div className="extra-usefull-links">
            <Link to="/register">Don't have an account? Register</Link>
          </div>
          <div className="login-copyright">
            <p>
              Copyright © <Link to="/">DOC SUGGEST </Link> {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
