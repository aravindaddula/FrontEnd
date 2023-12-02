import { useState } from 'react'
import './styles.css'
export default function GreetUser(){
    const[fName, setfName] = useState("")
    const[lName, setlName] = useState("")

    function updateFName(evt){
        setfName(evt.target.value)
        // console.log(evt.target.value);
    }
    function updateLName(evt){
        setlName(evt.target.value)
        // console.log(evt.target.value);
    }

    return(
        <div className='form-container'>
            <h1>Hello {fName} {lName} </h1>
            <form action="">
                <input name='fName' onChange={updateFName}
                    placeholder='First Name' />

                <input name="lName" onChange={updateLName}
                    placeholder='Last Name'/>

                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}