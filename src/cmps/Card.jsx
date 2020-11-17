import React from 'react'

// Creating an illusion of slots
export function Card({ header, body, footer, img }) {
    const time = toLocalDate(header)

    function toLocalDate(time){
       let date = time.substring(0,10);
       return date;
    }


    console.log(img);
    return (
        <div className="card flex column align-center">
            <h3 className="card-title tac ">{time }</h3>
          <div className="forcast-img">  { img && <img src={img} alt="" /> }</div>
            <div className="card-body">{ body }</div>
        </div>
    )
}
