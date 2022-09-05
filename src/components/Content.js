import React from 'react'

export const Content = (props) => {
  const con = {
    backgroundColor: '#3333',
    color: 'black',
    margin: '10px',
    padding: '300px'
  }
  return (

    <div style={con}>
    
      <center>       
      <h1>{props.title}</h1>
        <h3>{"Name :  " + props.uName}</h3>
        <h3>{"Roll NO: " + props.roll}</h3>
      </center>

    </div>
  )
}
