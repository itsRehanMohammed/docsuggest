import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./Login.css";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", confirm_password: "" });
  const onChangeHandler = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    const { name, email, password, confirm_password } = credentials;
    event.preventDefault();
    const response = await fetch("https://mosho.onrender.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, confirm_password }),
    });
    const data = await response.json();
    if (data.success) {
      // alert("Account Created Successfully");
      toast.success("Account Created Successfully");
      setTimeout(() => {
        window.location.href = "http://app.themosho.com/login";
      }, 1000);
    } else {
      // alert("Errors");
      toast.error(data.message);
    }
  };
  return (
    <>
      <div className="Signup">
        <ToastContainer />
        <div className="signup-form-wrapper">
          <div className="signup-head">
            <span className="lock-icon">
              {" "}
              <LockOutlinedIcon />
            </span>
            <h2>Register</h2>
          </div>
          <form action="" onSubmit={handleSubmit} className="form">
            <div className="signup-name">
              <TextField required autoComplete="true" onChange={onChangeHandler} value={credentials.name} className="input-name" id="input-name" label="name" name="name" type="text" />
            </div>

            <div className="signup-email">
              <TextField required autoComplete="true" onChange={onChangeHandler} value={credentials.email} className="input-email" id="input-email" label="Email" name="email" type="email" />
            </div>
            <div className="signup-password">
              <TextField required autoComplete="true" onChange={onChangeHandler} value={credentials.password} className="input-password" id="input-password" label="Password" name="password" type="password" />
            </div>
            <div className="signup-confirm-password">
              <TextField required autoComplete="true" onChange={onChangeHandler} value={credentials.confirm_password} className="input-confirm-password" id="input-confirm-password" label="Confirm Password" name="confirm_password" type="password" />
            </div>
            <div className="signup-button">
              <button type="submit" className="inline-flex items-center justify-center w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                {/* {spinner ? <TailSpin height={25} color="#fff" wrapperStyle={{ justifyContent: "center" }} /> : "SIGN UP"} */}
                REGISTER
              </button>
            </div>
          </form>
          <div className="extra-usefull-links">
            <Link to="/login">Already have an account? Login </Link>
          </div>
          <div className="signup-copyright">
            <p>
              Copyright © <Link to="/">DOC SUGGEST</Link> {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
