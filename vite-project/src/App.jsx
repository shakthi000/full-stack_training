import React, { useState } from "react";
import "./App.css";
import Comp1 from "./Comp1";

function App() {
  const myInfo = {
    name: "Shakthi Akshata",
    age: 19,
    secId: "Sec23cj033",
    department: "M.Tech CSE"
  };

  const herInfo = {
    name: "Rajalakshmi",
    age: 19,
    secId: "Sec23cj001",
    department: "M.Tech CSE"
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <div className="content">
        <h1 style={{ textAlign: "center", color: isDarkMode ? "#F9F6E6" : "darkred" }}>
          Friends Forever :)
        </h1>

        <br />

        <div>
          <h1 style={{ fontSize: "20px", textAlign: "center", color: "#b59199", fontStyle: "italic" }}>
            Me ♥
          </h1>
          <Comp1 name={myInfo.name} age={myInfo.age} secId={myInfo.secId} department={myInfo.department} />

          <h1 style={{ fontSize: "20px", textAlign: "center", color: "#b59199", fontStyle: "italic" }}>
            Her ♥
          </h1>
          <Comp1 name={herInfo.name} age={herInfo.age} secId={herInfo.secId} department={herInfo.department} />
        </div>

        <button className="action-button" onClick={() => alert("Bye!")}>Click Me!</button>
        <button className="action-button" onDoubleClick={() => alert("See you later!")}>Click Me!</button>

        <button className="toggle-button" onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
