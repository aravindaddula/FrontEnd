import { useState } from 'react';
import './styles.css'

export default function Timer(){
    let[timer, setTimer]= useState("TIME")
    const time = new Date().toLocaleTimeString()

    function setTime(){
        const now = new Date().toLocaleTimeString()
        setTimer(now)
        // setTimer(time)
        //  the above statement and below is same
        // setTimer(time)

    }
    setInterval(setTime,1000)
    console.log(timer);

    return(
        <div className="timer">
            <h1>{timer}</h1>
            {/* <h1>{timer}</h1> */}
            {/* <button onClick={()=>setTimer(time)}>GET TIME</button> */}
        </div>
    )
}