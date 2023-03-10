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
    <div className="w-full h-full flex flex-wrap justify-center">
      <div className='bg-[url("https://images.hdqwalls.com/wallpapers/kaisa-league-of-legends-4k-artwork-v9.jpg")] h-96 w-full bg-cover bg-center p-24 object-top'>
        <h1 className='text-white text-6xl font-bold'>This is the Headline</h1>
        <h2 className='text-white text-3xl font-light mt-5'>Some really great stuff here.</h2>
      </div>
      {message.map((row,index) => (
      <div className="m-8 flex" > 
        <Link to={`details/${index}`} className='flex-col' >
          <img className='w-64 h-72' src={`${arr[index]}`} alt={`${row.champ_name}-${index}`} />
          <p className="text-center">{row.champ_name}</p>
        </Link>
        </div>))}
    </div>
  );
}

export default App