import React, { useState, useEffect } from "react";
import {arr} from "./arr.js";
import { Link } from "react-router-dom"

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
      
      {message.map((row,index) => (<div>
        <Link to={`details/${index}`}>
          <img src={`${arr[index]}`} alt={`${row.champ_name}-${index}`}/>
          <p>{row.champ_name}</p>
        </Link>
        </div>))}
    </div>
  );
}

export default App