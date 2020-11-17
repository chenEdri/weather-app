import React from 'react'
import { Link } from 'react-router-dom'

export function ItemPreview({ item }) {

    const temp = require('../../assets/img/temp.png')
    const units = ['']
    return (
        <div>
            <div className= "flex align-center justify-center tac ">
                {item.Temperature.Minimum.Value}-{item.Temperature.Maximum.Value}<span className="bold">{item.Temperature.Minimum.Unit}°</span>
                </div>
                <div className="bold">{item.Day.PrecipitationType}-{item.Day.PrecipitationIntensity}</div> 
            {/* <div className= "flex">Night: 
            <div className="ml15">{item.Night.PrecipitationType}-{item.Night.PrecipitationIntensity}</div>
            </div> */}
        </div>
    )
}