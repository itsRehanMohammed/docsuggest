import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { toast } from "react-toastify";
import { Avatar } from "@mui/material";
const Navbar = () => {
  const [width, setWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutModal = () => {
    setAnchorEl(null);
    setModal(true);
  };
  const logoutHandeler = async () => {
    setModal(false);
    const response = await fetch("https://mosho.onrender.com/api/logout", {
      method: "POST",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: localStorage.getItem("refresh_token") }),
    });
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    const data = await response.json();
    toast.success(data.status);
    navigate("/");
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  if (width > 1000) {
    return (
      <>
        <div className=" bg-gradient-to-b from-blue-200 to-white text-white flex flex-row text-[#000] items-center justify-between py-3 px-10">
          <div className="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to="/">
              <span className="ml-3 text-[#000] text-xl">DOC SUGGEST :)</span>
            </Link>
          </div>
          <div className="flex flex-row items-center text-[#000]">
            <Link to="/" className="mx-5 hover:text-blue-500">
              Home
            </Link>

            <Link to="/help" className="mx-5 hover:text-blue-500">
              Help
            </Link>
            <Link to="/listpractice" className="mx-5 hover:text-blue-500">
              List Your Practice
            </Link>

            {/* <button className="bg-[#3b82f6] px-5 py-3 rounded-3xl text-white">Register Now</button> */}
            {!localStorage.getItem("token") ? (
              <Link to={"/register"} className="bg-[#3b82f6] px-5 py-3 rounded-3xl text-white">
                Register Now
              </Link>
            ) : (
              <div className="after_login">
                <Button id="fade-button" aria-controls={open ? "fade-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                  <Avatar sx={{ width: 40, height: 40 }} style={{ backgroundColor: "#3b82f6" }}>
                    {(localStorage.getItem("username") && localStorage.getItem("username").slice(0, 1)) || "U"}
                    {}
                  </Avatar>
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={logoutModal}>Logout</MenuItem>
                </Menu>
                <div className={modal ? "logout_modal modal_active" : "logout_modal"}>
                  <p style={{ color: "#000" }}>Are You Sure You want to logout?</p>
                  <button style={{ backgroundColor: "red", marginRight: "20px" }} onClick={logoutHandeler}>
                    Logout
                  </button>
                  <button style={{ backgroundColor: "#047aed" }} onClick={() => setModal(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto relative">
        <div className="flex flex-row justify-between items-center my-3 mx-5 text-black">
          <div className="flex flex-row items-center">
            <Link to="/">
              <h1 className="ml-2 text-[#000] font-semibold">DOC SUGGEST :)</h1>
            </Link>
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)} className=" p-2 rounded-lg  focus:outline-none ">
              <div className="flex flex-col items-center">
                <span className="h-0.5 w-4 bg-black mb-1"></span>
                <span className="h-0.5 w-4 bg-black mb-1"></span>
                <span className="h-0.5 w-4 bg-black mb-1"></span>
              </div>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center text-black pb-5">
            <Link to="/" className="mx-5 hover:text-blue-500 ">
              Home
            </Link>
            <Link to="/help" className="mx-5 hover:text-blue-500">
              Help
            </Link>
            <Link to="/listpractice" className="mx-5 hover:text-blue-500">
              List Your Practice
            </Link>
            <div className="flex flex-row items-center mt-5">
              {/* <button className="bg-[#3b82f6] px-5 py-3 rounded-3xl text-white">Register Now</button> */}
              {!localStorage.getItem("token") ? (
                <Link to={"/register"} className="bg-[#3b82f6] px-5 py-3 rounded-3xl text-white">
                  Register Now
                </Link>
              ) : (
                <div className="after_login">
                  <Button id="fade-button" aria-controls={open ? "fade-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                    <Avatar sx={{ width: 40, height: 40 }} style={{ backgroundColor: "#3b82f6" }}>
                      {(localStorage.getItem("username") && localStorage.getItem("username").slice(0, 1)) || "U"}
                      {}
                    </Avatar>
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={logoutModal}>Logout</MenuItem>
                  </Menu>
                  <div className={modal ? "logout_modal modal_active" : "logout_modal"}>
                    <p style={{ color: "#000" }}>Are You Sure You want to logout?</p>
                    <button style={{ backgroundColor: "red", marginRight: "20px" }} onClick={logoutHandeler}>
                      Logout
                    </button>
                    <button style={{ backgroundColor: "#047aed" }} onClick={() => setModal(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
