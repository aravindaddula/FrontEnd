import { useState } from 'react'
import './styles.css'
export default function GreetUserAdvanced(){
    const[fullName, setFullName] = useState(
        {
            fName:"",
            lName:""
        }
    )
// console.log(fullName.fName);

    function updateName(evt){
        // let newName = evt.target.value
        // let getKey = evt.target.name
        const{value:newName,name:getKey} = evt.target
            setFullName( prevValue =>{
                if (getKey === 'fName') {
                    return {
                        fName:newName,
                        lName:prevValue.lName
                    }
                }else{
                    return {
                        fName:prevValue.fName,
                        lName:newName
                    }
                }                
            })
        }

    return(
        <div className='form-container'>
            <h1>Hello {fullName.fName} {fullName.lName} </h1>
            <form action="">
                <input name='fName' onChange={updateName}
                    placeholder='First Name' />

                <input name="lName" onChange={updateName}
                    placeholder='Last Name'/>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}