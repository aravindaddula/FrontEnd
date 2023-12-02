import { useState } from "react";
import './styles.css'

function Square({value}) {
 /*  const[value,setValue] = useState(null)
  function handleClick(){
    setValue('X')
  } */
// console.log('clicked on '+value);
    return <button className="btn btn-primary w-25 h-10 ml-5 border border-secondary" //onClick={handleClick}
            >{value}</button>;
}

  export default function Board(){
    const[square,setQuare]=useState(Array(9).fill(null))
    console.log(square);
    return (
        <div className="container">
            <div className="row">
                <Square value={square[0]}/>
                <Square value={square[1]}/>
                <Square value={square[2]}/>
            </div>
            <div className="row">
                <Square value={square[3]}/>
                <Square value={square[4]}/>
                <Square value={square[5]}/>
             </div>
            <div className="row ">
                <Square value={square[6]}/>
                <Square value={square[7]}/>
                <Square value={square[8]}/>
            </div>
      </div>
    )
  }