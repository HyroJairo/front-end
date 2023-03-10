/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import {arr} from "./arr.js";

import "./App.css";

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((data) => setMessage(data));
  });
  
  return (
    
    <div className="App">
      
      {message.map((row,index) => 
      (<div>
        <img src={`${arr[index]}`}/>
        <p>{row.champ_name}</p>
      </div>))}  
    </div>
  );
}

export default App