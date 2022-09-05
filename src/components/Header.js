import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import App from '../App'

export const Header = (props) => {
    var style={
        margintop:'0px',
        padding:'50px',
        backgroundColor: '#333',
        color : '#fff',
      
    }
    var head = {

      
    }
    
  return (
    <div style={style}> 
         <h1>logo</h1>
         <center><h1>{props.Title}</h1></center>
        
    </div>
  )
}
