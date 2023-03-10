import React from 'react'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import {arr} from "./arr.js";


const Details = () => {
    const  {id} = useParams()
    const [champData, setChampData] = useState({});
    const [counterOneId, setCounterOneId] = useState()
    const [counterTwoId, setCounterTwoId] = useState()


    useEffect(() => {
        fetch('http://localhost:3000')
        .then((res) => res.json())
        .then((data) => {
            setChampData(data[id])
            let first_id = data.reduce((acc, champ, idx) => {
                if (champ.champ_name === data[id].counter_one) {
                    return [...acc, idx]
                } else {
                    return acc
                }
            }, [])
            setCounterOneId(first_id)
            let second_id = data.reduce((acc, champ, idx) => {
                if (champ.champ_name === data[id].counter_two) {
                    return [...acc, idx]
                } else {
                    return acc
                }
            }, [])    
            setCounterTwoId(second_id)
        });
    }, [id]);
    
  return (
    <div>
        <div>
            <h1 className='m-2 p-2 bg-sky-400 w-24 flex justify-center rounded-md'><Link to='/'>Home</Link></h1>
        </div>
        {champData &&
        <div className=''>
            <div className='mt-2 flex'>
                <p className='flex items-center pl-8 p-2 text-4xl text-white  w-full bg-sky-600'>{champData.champ_name}</p>
                <p className='p-2 self-end bg-sky-600 text-white'>Patch {champData.patch_version}</p>
            </div>
            <div className='m-4 p-4 flex justify-between bg-slate-50 rounded-md shadow-xl'>
                <div>
                    <img src={`${arr[id]}`} alt={`${champData.champ_name}-${id}`} className=''/>
                </div>

                <div>
                    <h2 className='m-2 text-2xl'>Role & Counters</h2>
                    <p>Class: {champData.class}</p>
                    <p>Role: {champData.role}</p>
                    <p>Tier: {champData.tier}</p>
                    <div className='flex w-full flex-col items-center'>
                        <h2 className='m-2'>Counters</h2>
                        <div className=''>
                            <Link to={`/details/${counterOneId}`}>
                                <div className='flex items-center'>
                                    <img src={`${arr[counterOneId]}`} alt={`${champData.counter_one}`} 
                                    className='m-2 w-16 h-16'/>
                                    <p>{champData.counter_one}</p>
                                </div>
                            </Link>
                            <Link to={`/details/${counterTwoId}`}>
                            <div className='flex items-center'>
                                <img src={`${arr[counterTwoId]}`} alt={`${champData.counter_two}`} 
                                className='m-2 w-16 h-16'/>
                                <p>{champData.counter_two}</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='m-2 text-2xl'>Stats</h2>
                    <div>
                        <p>Overall Score: {champData.score}</p>
                        <p className={`${champData.win_percentage > 0.51 ? 'text-blue-400' : champData.win_percentage < 0.49 ? 'text-red-600' : ''}`}
                        >Winrate: {champData.win_percentage * 100}%</p>
                        <p>{champData.role_percentage * 100}% played {champData.role}</p>
                        <p>Pick rate: {champData.pick_percentage * 100}%</p>
                        <p>Ban rate: {champData.ban_percentage * 100}%</p>
                        <p className={`${champData.trend > 1.2 ? 'text-blue-400' : champData.trend < -1.2 ? 'text-red-600' : ''}`}
                        >Winrate change: {champData.trend > 0 ? '+' : ''}{champData.trend}%</p>
                    </div>
                </div>
            </div>

            <div className='m-4 p-4 flex flex-col bg-slate-50 rounded-md shadow-xl'>
                <h2 className='text-2xl'>Build</h2>
                <div>
                    <p className='text-lg m-2'>Starting Item: {champData.starter_item}</p>
                    <p className='text-lg m-2'>First Item: {champData.first_item}</p>
                    <p className='text-lg m-2'>Second Item: {champData.second_item}</p>
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Details