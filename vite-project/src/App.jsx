import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() { 
  let name="Shakthi Akshata"

  const MyDetails={ 
    name: "Shakthi Akshata",
    age: 19,
    dept: "M.Tech CSE"
  }

  //const arrow functions
  const department=()=>{
    console.log("Studying in M.Tech");
  }
  const year=()=>{
    console.log("In 2nd year");
  }

  //alert and console log
  console.log(`My name is ${MyDetails.name}`)

  return (
    <>
      <h3 style={{fontSize:"22px",textAlign:"center",color:"darkred"}}>Inline CSS: <br /> My name is {MyDetails.name}</h3> 
      
      <br />
  
      <p className='MyDetails'>External CSS: <br /> My age is {MyDetails.age} </p> 
      
      {/*Calling arrow functions*/}
      <button onClick={department}>Click me</button>
      <button onClick={year}>Click Here</button>

      <br />

      {/*Calling using anonymous arrow function*/}
      <button onClick={()=>console.log("Bye!")}>Want to go anonymous?</button>

    </>
  )
}

export default App
