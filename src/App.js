import "./App.css";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Practice from "./components/Practice/Practice";
import Signup from "./components/Login and SignUp/Signup";
import Login from "./components/Login and SignUp/Login";
import ScrollToTop from "./ScrollToTop";
import DoctorSearch from "./Pages/DoctorSearch";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";
import LoginModal from "./Modals/LoginModal";
import { useEffect, useState } from "react";
import { LoadScript } from "@react-google-maps/api";
function App() {
  const [isLoggedIn] = useState(!!localStorage.getItem("token"));
  const [loginOpen, setLoginOpen] = useState(false);
  useEffect(() => {
    if (!isLoggedIn) {
      setTimeout(() => {
        // setLoginOpen(true);
      }, 40000);
    }
  }, []);
  const handleLoginModalClose = () => {
    setLoginOpen(false);
  };
  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={["places"]} // Specify "places" library
      >
        <Router>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/register" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/listpractice" element={<Practice />} />
            <Route exact path="/doctorsearch" element={<DoctorSearch />} />
            <Route
              exact
              path="/doctorsearch/:doctorname"
              element={<DoctorDetails isLoggedIn={isLoggedIn} />}
            />
          </Routes>
          <LoginModal open={loginOpen} onClose={handleLoginModalClose} />
          <Footer />
        </Router>
      </LoadScript>
    </>
  );
}

export default App;
