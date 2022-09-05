import React from 'react'

export const AboutUs = () => {
  return (
    <div>
          {
             localStorage.getItem("uid") ?
      <h3>AboutUs</h3>
      :<h2>err</h2>}
      </div>
  )
}
