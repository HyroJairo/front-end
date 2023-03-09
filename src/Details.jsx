import React from 'react'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import {arr} from "./arr.js";

const Details = () => {
    const  {id} = useParams()
    const [champData, setChampData] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000')
        .then((res) => res.json())
        .then((data) => {
            setChampData(data[id])
        });
    }, []);
    
  return (
    <div>
        {champData &&
        <div>
            <p>{champData.champ_name}</p>
            <img src={`${arr[id]}`} alt={`${champData.champ_name}-${id}`}/>
        </div>
        }
        <pre>{JSON.stringify(champData, 0, 4)}</pre>
    </div>
  )
}

export default Details