import React from 'react'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import {arr} from "./arr.js";

const Details = () => {
    const  {id} = useParams()
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000')
        .then((res) => res.json())
        .then((data) => {
            setMessage(data)
        });
    }, []);
    
  return (
    <div>
        {message &&
        <div>
            <p>{message[id].champ_name}</p>
            <img src={`${arr[id]}`} alt={`${message[id].champ_name}-${id}`}/>
        </div>
        }
    </div>
  )
}

export default Details