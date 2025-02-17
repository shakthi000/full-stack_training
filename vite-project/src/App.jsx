import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Comp1 from './Comp1'

function App() { 
  const myInfo={
    name:"Shakthi Akshata",
    age: 19,
    secId: "Sec23cj033",
    department:"M.Tech CSE"
  }

  const herInfo={
    name2:"Rajalakshmi",
    age2: 19,
    secId2: "Sec23cj001",
    department2:"M.Tech CSE"
  }

  return (
    <>
      <h1 style={{textAlign:"center",color:"darkred"}}>Friends Forever :)</h1>
      
      <br />

      <div>
      <h1 style={{fontSize:"20px",textAlign:"center",color:"#b59199",fontStyle:"italic"}}>Me ♥</h1>
        <Comp1 name={myInfo.name} age={myInfo.age} secId={myInfo.secId} department={myInfo.department} />
        <h1 style={{fontSize:"20px",textAlign:"center",color:"#b59199",fontStyle:"italic"}}>Her ♥</h1>
        <Comp1 name={herInfo.name2} age={herInfo.age2} secId={herInfo.secId2} department={herInfo.department2} />
      </div>
      <button onClick={()=>{alert("Bye!")}}>Click</button>
      <button onDoubleClick={()=>{alert("See you later!")}}>Click Me Too!</button>

    </>
  )
}

export default App;