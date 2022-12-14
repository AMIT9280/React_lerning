 
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {  
  const [uName, setUname] = useState(localStorage.getItem("Name"))
  const [uEmail, setEmail] = useState(localStorage.getItem("Email"))
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">E-Society</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/aboutUs">About US <span class="sr-only"></span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ContactUs">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ContactDetails/102/raj">Contact Details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/AddUser">AddUser</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/GetUser">ViewUser</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li> */}
        <br/> 
        <li class="nav-item">
          <Link class="nav-link" to="/log">User Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Logout">Logout</Link>
        </li>
      </ul>
     
    </div>
   { uName ?
    <font color="red" size="3"> Welcome {uName} Email {uEmail} </font>
   :''} 
  </nav>
  )
}