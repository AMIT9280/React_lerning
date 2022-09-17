import React, { useState } from 'react'
import { AddCountry } from "./AddCountry";
import { AppContext } from "./context";
import { CountryList } from "./CountryList";
import { ADD_COUNTRY,DELETE_COUNTRY } from "../Const";
export const Json = () => {

    const [countries, setcountries] = useState([
        {
          name: "India",
          capital: "New Delhi",
          population: "1.3 Billion",
        },
      ]);
    
      const dispatchAction = (actionType, payload) => {
        switch (actionType) {
          case ADD_COUNTRY:
            
            setcountries([...countries, payload]);
            return;
          case DELETE_COUNTRY:
            setcountries(countries.filter((c) => c.name !== payload.name));
            return;
          default:
            return;
        }
      };
    return (
        <div>
            <AppContext.Provider value={{ countries, dispatchAction }}>
                <AddCountry/>
                <CountryList/>
            </AppContext.Provider>
        </div>
    )
}
