import React from 'react'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import {arr} from "./arr.js";
import Info from "./Info.js";

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
    <div style={{display: 'flex', justifyContent: 'center'}}>

{/* experiment */}
        {champData &&
        <Info
            title={`${champData.champ_name}`}
            imageUrl={`${arr[id]}`}
            body={champData}
        />
        }
        
{/* end experiment */}
        
    </div>
  )
}

export default Details