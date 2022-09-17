import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

export const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
    
    navigate("/log");
       
    }, [])
    
  return (
    <div> 
        
         {
         localStorage.clear("Name")
          
         }
       

    </div>
  )
}
