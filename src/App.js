import React, { useState, useEffect } from "react";
import {arr} from "./arr.js";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((data) => setMessage(data));
  });
  
  return (
    <div className="App">

      {message.map(row => (<p>{row.champ_name}</p>))}
      {arr.map(image =>
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={`${image}`}/>)}
      
    </div>
  );
}

export default App