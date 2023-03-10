import React, { useState, useEffect } from "react";
import {arr} from "./arr.js";
import { Link } from "react-router-dom"
// experimental
import Card from "./Card.js"

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
      <div className='bg-[url("https://images.hdqwalls.com/wallpapers/kaisa-league-of-legends-4k-artwork-v9.jpg")] h-1/2 w-full bg-cover bg-top p-16'>
        <h1 className='text-white text-5xl font-bold'>This is an <br/>info gallery <br/>where you can<br/>find more about<br/> your champions!</h1>

      </div>

{/* experiment */}
      {message.map((row, index) => (
        <div>
          <Link to={`details/${index}`}>
            <Card
            title={`${row.champ_name}`}
            imageUrl={`${arr[index]}`}
            body='champion'
            />
          </Link>
        </div>    
      ))}
{/* end of experiment */}
    
    </div>
  );
}

export default App