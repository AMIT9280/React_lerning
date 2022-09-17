import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export const UserLogin = () => {
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();
    const [name, setName] = useState();
        
    const Submit = async() =>{
        await axios.get("https://healthy-me-rest-api.herokuapp.com/users").then(res=>{
            console.log(res.data.data[0]);
            localStorage.setItem("Name",res.data.data[0].firstName); 
            localStorage.setItem("Email",res.data.data[0].email); 

        }).catch(err=>{
            console.log(err);
        })
        navigate("/GetUser");
    }
  
  return (
    <div> 
          <form onSubmit={handleSubmit(Submit)}>
                
                <input type="submit" value="Login" />
            </form>
    </div>
  )
}
