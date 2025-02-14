import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' //external css

function App() { //function 
  let name="Shakthi Akshata"

  const MyDetails={ //calling objects
    name: "Shakthi Akshata",
    age: 19,
    dept: "M.Tech CSE"
  }

  //alert and console log
  alert(`Hello!`)
  console.log(`My name is ${MyDetails.name}`)

  //return statement
  return (
    <>
      {/*inline css*/}
      <h2 style={{textAlign:"center",color:"white"}}>Inline CSS: <br /> My name is {MyDetails.name}</h2> 
      <br />
      {/*external css*/}
      <p className='MyDetails'>External CSS: <br /> My age is {MyDetails.age} </p> 
      <p className='MyDetails'>My Dept is {MyDetails.dept}</p>
    </>
  )
}

export default App
