import React,{useState} from "react";

export default function PowerIndicator(){
    let positive={backgroundColor:'green',width:'100px',height:'200'};
    let negative={backgroundColor:'red',width:'100px',height:'150px'}
    let [power,setPower] = useState(0);
    return(
        <div >
            <h1 style={power>-1?positive:negative}>{power}</h1>
            <button onClick={()=>setPower(power+1)} >Increase</button>
            <button onClick={()=>setPower(power-1)} >Decrease</button>

        </div>
)}