import React, { useState } from "react";
import "./App.css";
import About from "./About";
import Feedback from "./Feedback";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");

  const SubmitInfo = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(dept);
  };

  return (
    <Router>
      <div className="container">
        <form className="form" onSubmit={SubmitInfo}>
          <h2>Registration Form</h2>
          <input className="name" type="text" required value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
          <input className="dept" type="text" required value={dept} placeholder="Enter Department" onChange={(e) => setDept(e.target.value)}/>
          <input className="email" type="email" required placeholder="Enter Email" />
          <input className="password" type="password" required placeholder="Enter Password" />

          <button className="submit" type="submit">Submit</button>
          <button className="reset" type="reset">Reset</button>
        </form>
      </div>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;