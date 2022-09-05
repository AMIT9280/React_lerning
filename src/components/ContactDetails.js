import React from 'react'
import { useParams } from 'react-router'

export const ContactDetails = () => {
  var id = useParams().id; 
  var name = useParams().name;
  return (
    <div>ContactDetails {id},{name}</div>
  )
}
