import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem, Select } from "@mui/material";
import "./PracticeForm.css";

function PracticeForm() {
  const [courseFields, setcourseFields] = useState({ course_name: "", price: "", duration: "", description: "", description_2: "", who_should_learn: "", syllabus: "", we_provides: "", popular_roles: "", meeting: "", recording: "", category: "" });
  const [image, setimage] = useState("");

  const onChangeHandler = (e) => {
    setcourseFields({ ...courseFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { course_name, price, duration, description, description_2, who_should_learn, syllabus, we_provides, popular_roles, meeting, recording, category } = courseFields;
    const form_data = new FormData();
    form_data.append("course_name", course_name);
    form_data.append("price", price);
    form_data.append("image", image);
    form_data.append("duration", duration);
    form_data.append("description", description);
    form_data.append("description_2", description_2);
    form_data.append("who_should_learn", who_should_learn);
    form_data.append("syllabus", syllabus);
    form_data.append("we_provides", we_provides);
    form_data.append("popular_roles", popular_roles);
    form_data.append("meeting", meeting);
    form_data.append("recording", recording);
    form_data.append("category", category);
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
      setcourseFields({ course_name: "", image: "", price: "", duration: "", description: "", description_2: "", who_should_learn: "", syllabus: "", we_provides: "", popular_roles: "", meeting: "", recording: "", category: "" });
      toast.success("New Course Added Successfully!");
    }
  };

  return (
    <div className="add_new_course">
      <div className="add_new_course_form_wrapper">
        <div className="form_head">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">List your practice</h1>
        </div>

        <form action="" onSubmit={handleSubmit} className="form">
          <div className="course_name">
            <TextField onChange={onChangeHandler} required autoComplete="true" className="input-name" id="input-name" label="Course Name" name="course_name" type="text" value={courseFields.course_name} />
          </div>

          <div className="category">
            {/* <TextField onChange={onChangeHandler}  autoComplete="true" className="input-category" id="input-category" label="Category" name="Category" type="text" /> */}
            <InputLabel required id="demo-simple-select-label">
              Category
            </InputLabel>
            <Select required onChange={onChangeHandler} value={courseFields.category} name="category" labelId="demo-simple-select-label" id="demo-simple-select" label="Category" sx={{ width: "100%" }}>
              <MenuItem value="Software Testing">Software Testing</MenuItem>
              <MenuItem value="Database Management">Database Management</MenuItem>
              <MenuItem value="Designing">Designing</MenuItem>
              <MenuItem value="DevOps">DevOps</MenuItem>
              <MenuItem value="Administration">Administration</MenuItem>
              <MenuItem value="Citrix">Citrix</MenuItem>
              <MenuItem value="UI Path">UI Path</MenuItem>
              <MenuItem value="Cyber Security">Cyber Security</MenuItem>
              <MenuItem value="AI">AI</MenuItem>
              <MenuItem value="Big Data">Big Data</MenuItem>
              <MenuItem value="ERP">ERP</MenuItem>
              <MenuItem value="Workday">Workday</MenuItem>
              <MenuItem value="VMWare">VMWare</MenuItem>
              <MenuItem value="Software Development">Software Development</MenuItem>
              <MenuItem value="Cloud Computing">Cloud Computing</MenuItem>
              <MenuItem value="Machine learning">Machine learning</MenuItem>
              <MenuItem value="Web Development">Web Development</MenuItem>
            </Select>
          </div>

          <div className="image_link">
            <label style={{ marginBottom: "6px" }} htmlFor="input-image">
              Image*
            </label>
            <TextField onChange={(e) => setimage(e.target.files[0])} required autoComplete="true" className="input-image" id="input-image" name="image" type="file" />
          </div>

          <div className="duration">
            <TextField onChange={onChangeHandler} value={courseFields.duration} required autoComplete="true" className="input-duration" id="input-duration" label="Duration of course in weeks" name="duration" type="text" />
          </div>

          <div className="price">
            <TextField onChange={onChangeHandler} value={courseFields.price} required autoComplete="true" className="input-price" id="input-price" label="Price" name="price" type="text" />
          </div>

          <div className="description">
            <TextField onChange={onChangeHandler} value={courseFields.description} required autoComplete="true" className="input-description" id="input-description" label="Course Description" name="description" type="text" />
          </div>

          <div className="description_2">
            <TextField onChange={onChangeHandler} value={courseFields.description_2} autoComplete="true" className="input-description-2" id="input-description-2" label="Description" name="description_2" type="text" placeholder="optional" />
          </div>
          <div className="who_should_learn">
            <TextField onChange={onChangeHandler} value={courseFields.who_should_learn} required autoComplete="true" className="input-who" id="input-who" label="Who Should Learn" name="who_should_learn" type="text" />
          </div>

          <div className="meeting_link">
            <TextField onChange={onChangeHandler} value={courseFields.meeting} required autoComplete="true" className="input-meeting" id="input-meeting" label="Meeting Link" name="meeting" type="text" />
          </div>

          <div className="recording_link">
            <TextField onChange={onChangeHandler} value={courseFields.recording} required autoComplete="true" className="input-recording" id="input-recording" label="Recording Link" name="recording" type="text" />
          </div>

          <div className="syllabus_link">
            <TextField onChange={onChangeHandler} value={courseFields.syllabus} required autoComplete="true" className="input-syllabus" id="input-syllabus" label="Syllabus Link" name="syllabus" type="text" />
          </div>

          <div className="popular_role">
            <TextField onChange={onChangeHandler} value={courseFields.popular_roles} required autoComplete="true" className="input-role" id="input-role" label="Popular Roles" name="popular_roles" type="text" placeholder='eg: "hi", "hello"' />
          </div>

          <div className="we_provides">
            <TextField onChange={onChangeHandler} value={courseFields.we_provides} required autoComplete="true" className="input-provides" id="input-provides" label="What We Provide" name="we_provides" type="text" placeholder='eg: "hi", "hello"' />
          </div>

          <button type="submit" className="inline-flex items-center justify-center w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Search
          </button>

          <div className="copyright">
            <p>
              Copyright © <Link to="/">DOC SUGGEST</Link> {new Date().getFullYear()}{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PracticeForm;
