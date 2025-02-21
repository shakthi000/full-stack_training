import React, { useState } from "react";
import "./App.css";

function App() {
  const[name,setName]=useState("");
  const[age,setAge]=useState("");
  const[dept,setDept]=useState("");
  const SubmitInfo=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(age);
    console.log(dept);
  }


  return (
    <div className="reg-form">
      <form className="form" onSubmit={(SubmitInfo)}>
        <h2>Registration Form</h2>
        <input className="name" type="text" required value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
        <input className="age"type="text" required value={age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} />
        <input className="dept" type="text" required value={dept} placeholder="Enter Department" onChange={(e)=>setDept(e.target.value)} />
        
        <input className="email" type="email" required placeholder="Enter Email" />
        <input className="password" type="password" required placeholder="Enter Password" />
        <input className="confirm-password" type="password" required placeholder="Confirm Password" />

        <button className="submit" type="submit">Submit</button>
        <button className="reset">Reset</button>
      </form>
    </div>
  );
}

export default App;
