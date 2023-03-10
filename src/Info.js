import React from 'react';
import './Info.css'
function Info({title, imageUrl, body}) {
    return (
        <div className='info-container'>
            <div className="info-image-container">
                <img src={`${imageUrl}`} alt='' />
            </div>
            <div className="info-content">
                
                <div className="info-body">
                    <p>Champion's name: {body.champ_name}</p>
                    <p>Class: {body.class}</p>
                    <p>Tier: {body.tier}</p>
                    <p>Role: {body.role}</p>
                    <p>Starter Item: {body.starter_item}</p>
                    <p>First Item: {body.first_item}</p>
                    <p>Second Item: {body.second_item}</p>
                    <p>Counter One: {body.counter_one}</p>
                    <p>Counter Two: {body.counter_two}</p>
                    <p>Score: {body.score}</p>
                    <p>Trend: {body.trend}</p>
                    <p>Win percentage: {body.win_percentage}</p>
                    <p>Role percentage: {body.role_percentage}</p>
                    <p>Pick percentage: {body.pick_percentage}</p>
                    <p>ban percentage: {body.ban_percentage}</p>

                </div>
            </div>
            
        </div>
    )
}

export default Info