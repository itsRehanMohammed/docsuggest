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
function App() {
  return (
    <>
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
            element={<DoctorDetails />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
