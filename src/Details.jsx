import React from 'react'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
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
                if (champ.champ_name == data[id].counter_one) {
                    return [...acc, idx]
                } else {
                    return acc
                }
            }, [])
            setCounterOneId(first_id)
            let second_id = data.reduce((acc, champ, idx) => {
                if (champ.champ_name == data[id].counter_two) {
                    return [...acc, idx]
                } else {
                    return acc
                }
            }, [])    
            setCounterTwoId(second_id)
        });
    }, []);
    
  return (
    <div>
        {champData &&
        <div className=''>
            <div className='mt-8 flex'>
                <p className='flex items-center pl-8 p-2 text-4xl text-white  w-full bg-sky-600'>{champData.champ_name}</p>
                <p className='p-2 self-end bg-sky-600 text-white'>Patch {champData.patch_version}</p>
            </div>
            <div className='m-4 p-4 flex justify-between bg-slate-50 rounded-md shadow-xl'>
                <div>
                    <img src={`${arr[id]}`} alt={`${champData.champ_name}-${id}`} className=''/>
                </div>

                <div>
                    <h2 className='text-2xl'>Role & Counters</h2>
                    <p>Class: {champData.class}</p>
                    <p>Role: {champData.role}</p>
                    <p>Tier: {champData.tier}</p>
                    <div className='flex w-full flex-col items-center'>
                        <h2>Counters</h2>
                        <div className=''>
                            <div className='flex items-center'>
                                <img src={`${arr[counterOneId]}`} alt={`${champData.counter_one}`} 
                                className='m-2 w-16 h-16'/>
                                <p>{champData.counter_one}</p>
                            </div>
                            <div className='flex items-center'>
                                <img src={`${arr[counterTwoId]}`} alt={`${champData.counter_two}`} 
                                className='m-2 w-16 h-16'/>
                                <p>{champData.counter_two}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl'>Stats</h2>
                    <div>
                        <p>Overall Score: {champData.score}</p>
                        <p>Winrate: {champData.win_percentage * 100}%</p>
                        <p>{champData.role_percentage * 100}% played {champData.role}</p>
                        <p>Pick rate: {champData.pick_percentage * 100}%</p>
                        <p>Ban rate: {champData.ban_percentage * 100}%</p>
                        <p>Winrate change: {champData.trend > 0 ? '+' : ''}{champData.trend}%</p>
                    </div>
                </div>
            </div>

            <div className='m-4 p-4 flex justify-between bg-slate-50 rounded-md shadow-xl'>
                <h2 className='text-2xl'>Build</h2>

            </div>
        </div>
        }
        <pre>{JSON.stringify(champData, 0, 4)}</pre>
    </div>
  )
}

export default Details