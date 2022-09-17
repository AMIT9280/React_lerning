import React, { useContext } from 'react'
import { AppContext } from './context';

export const CountryList = () => {
   
    var {countries,dispatchAction} = useContext(AppContext);
  return (
    <div>
         CountryList

{
    countries.map((c)=>{
        return(
            <ul>
                <li>{c.name}</li>
                <li>{c.capital}</li>
                <li>{c.population}</li>
                <li>
                    <button onClick={()=>{dispatchAction('DELETE_COUNTRY',c)}}>Delete</button>
                </li>
            </ul>
        )
    })
}
    </div>
  )
}
