import React, { useState } from 'react'

export const FormDemo = () => {
    const [firstName ,setFirstName] = useState('');
    const [lastName ,setLastName] = useState('');

    const firstNameHandler = (e) =>{

        console.log(e.target.value);
        setFirstName(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        
  
    }
    return (
        <div className='App'>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='FirstName'>FirstName</label>
                    <input type="text" onChange={(e)=>firstNameHandler(e)}></input>
                 </div>  
                 <div>
                    <label htmlFor='LastName'>LastName</label>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)}></input>
                 </div>  
                 <div>
                    <input type="submit" value="submit"></input>
                </div>
            </form>
        </div>
    )
}
