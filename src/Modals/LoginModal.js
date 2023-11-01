import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLoginAPI, userDataAPI } from "../api";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const LoginModal = ({ open, onClose }) => {
  console.log("yes, show", open);
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const onChangeHandler = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // let userName;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await userLoginAPI(credentials);
      const data = response.data;

      if (response.status === 200) {
        // Login successful
        toast.success("Logged in successfully!");
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        userDataAPI();
        // Redirect to the desired page
        setTimeout(() => {
          window.location.href = "http://localhost:3000/";
        }, 1000);
      } else if (response.status === 401) {
        // Handle the case of wrong credentials
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle other errors, such as network errors
      if (error.response) {
        // If the error is due to wrong credentials, extract and display the error message
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        // Handle other errors
        toast.error("An error occurred. Please try again later.");
      }
    }

    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Login</h2>
          <IconButton onClick={onClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <div className="bg-white p-8 rounded w-[80%] max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              required
              autoComplete="true"
              onChange={onChangeHandler}
              value={credentials.email}
              className="w-full p-2 border rounded"
              id="input-email"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              required
              autoComplete="true"
              onChange={onChangeHandler}
              value={credentials.password}
              type="password"
              className="w-full p-2 border rounded"
              id="input-password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full text-white bg-blue-500 border-0 py-2 px-6 rounded hover:bg-blue-600"
            >
              LOGIN
            </button>
          </div>
          <ToastContainer />
        </form>
        <div className="text-center">
          <Link to="/register" onClick={onClose} className="text-blue-500">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </Dialog>
  );
};

export default LoginModal;
