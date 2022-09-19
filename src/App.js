import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [hexNumber, setHexNumber] = useState(null);

  const generateNumber = () => {
    setHexNumber(randm);
  };
  const randm = Math.random().toString(16).substring(2, 8);
  return (
    <div className="App">
      <h1>Random Hex Color Generator</h1>
      <div className="colors">
        {" "}
        <div className="counter">#{hexNumber}</div>
        <div className="colorBox" style={{ background: `#${hexNumber}` }}></div>
      </div>

      <br />

      <button className="Bttn" onClick={generateNumber}>
        Generate Color
      </button>
    </div>
  );
}

export default App;
