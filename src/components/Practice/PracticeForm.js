import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem, Select } from "@mui/material";
import "./PracticeForm.css";

function PracticeForm() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
    category: "",
    awards: "",
    certificates: "",
    description: "",
    education: "",
    office_location: "",
    npi: "",
    phone: "",
    lat: "",
    lng: "",
    hours: { open_time: "", close_time: "" },
  });
  const [image, setImage] = useState("");

  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      name,
      email,
      password,
      confirm_password,
      role,
      category,
      awards,
      certificates,
      description,
      education,
      office_location,
      npi,
      phone,
      lat,
      lng,
      hours,
    } = credentials;
    // Create a new FormData object and append the doctor-related fields
    const form_data = new FormData();
    form_data.append("name", name);
    form_data.append("email", email);
    form_data.append("password", password);
    form_data.append("confirm_password", confirm_password);
    form_data.append("role", role);
    form_data.append("category", category);
    form_data.append("awards", awards);
    form_data.append("certificates", certificates);
    form_data.append("description", description);
    form_data.append("education", education);
    form_data.append("office_location", office_location);
    form_data.append("npi", npi);
    form_data.append("phone", phone);
    form_data.append("lat", lat);
    form_data.append("lng", lng);
    form_data.append("hours.open_time", hours.open_time);
    form_data.append("hours.close_time", hours.close_time);
    const response = await fetch("api/addcourses", {
      // mode: "no-cors",
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: form_data,
    });
    const data = await response.json();
    console.log(data);
    if (data.message) {
      toast.error(data.message);
    } else {
      setCredentials({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        role: "",
        category: "",
        awards: "",
        certificates: "",
        description: "",
        education: "",
        office_location: "",
        npi: "",
        phone: "",
        lat: "",
        lng: "",
        hours: { open_time: "", close_time: "" },
      });
      toast.success("New Course Added Successfully!");
    }
  };

  return (
    <div className="add_new_course">
      <div className="add_new_course_form_wrapper">
        <div className="form_head">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            List your practice
          </h1>
        </div>
        // ... (previous code)
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="name">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-name"
              id="input-name"
              label="Name"
              name="name"
              type="text"
              value={credentials.name}
            />
          </div>

          <div className="email">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-email"
              id="input-email"
              label="Email"
              name="email"
              type="email"
              value={credentials.email}
            />
          </div>

          <div className="password">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-password"
              id="input-password"
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
            />
          </div>

          <div className="confirm_password">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-confirm-password"
              id="input-confirm-password"
              label="Confirm Password"
              name="confirm_password"
              type="password"
              value={credentials.confirm_password}
            />
          </div>

          <div className="role">
            <TextField
              onChange={onChangeHandler}
              autoComplete="true"
              className="input-role"
              id="input-role"
              label="Role"
              name="role"
              type="text"
              value={credentials.role}
            />
          </div>

          <div className="awards">
            <TextField
              onChange={onChangeHandler}
              autoComplete="true"
              className="input-awards"
              id="input-awards"
              label="Awards"
              name="awards"
              type="text"
              value={credentials.awards}
            />
          </div>

          <div className="certificates">
            <TextField
              onChange={onChangeHandler}
              autoComplete="true"
              className="input-certificates"
              id="input-certificates"
              label="Certificates"
              name="certificates"
              type="text"
              value={credentials.certificates}
            />
          </div>

          <div className="description">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-description"
              id="input-description"
              label="Description"
              name="description"
              type="text"
              value={credentials.description}
            />
          </div>

          <div className="education">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-education"
              id="input-education"
              label="Education"
              name="education"
              type="text"
              value={credentials.education}
            />
          </div>

          <div className="office_location">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-office-location"
              id="input-office-location"
              label="Office Location"
              name="office_location"
              type="text"
              value={credentials.office_location}
            />
          </div>

          <div className="npi">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-npi"
              id="input-npi"
              label="NPI"
              name="npi"
              type="text"
              value={credentials.npi}
            />
          </div>

          <div className="phone">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-phone"
              id="input-phone"
              label="Phone"
              name="phone"
              type="text"
              value={credentials.phone}
            />
          </div>

          <div className="lat">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-lat"
              id="input-lat"
              label="Latitude"
              name="lat"
              type="text"
              value={credentials.lat}
            />
          </div>

          <div className="lng">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-lng"
              id="input-lng"
              label="Longitude"
              name="lng"
              type="text"
              value={credentials.lng}
            />
          </div>

          <div className="hours">
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-hours"
              id="input-hours"
              label="Open Time"
              name="hours.open_time"
              type="text"
              value={credentials.hours.open_time}
            />
            <TextField
              onChange={onChangeHandler}
              required
              autoComplete="true"
              className="input-hours"
              id="input-hours"
              label="Close Time"
              name="hours.close_time"
              type="text"
              value={credentials.hours.close_time}
            />
          </div>

          <div className="image_link">
            <label style={{ marginBottom: "6px" }} htmlFor="input-image">
              Image*
            </label>
            <TextField
              onChange={(e) => setImage(e.target.files[0])}
              required
              autoComplete="true"
              className="input-image"
              id="input-image"
              name="image"
              type="file"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Submit
          </button>

          <div className="copyright">
            <p>
              Copyright © <Link to="/">DOC SUGGEST</Link>{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </form>
        // ... (remaining code)
      </div>
    </div>
  );
}

export default PracticeForm;
