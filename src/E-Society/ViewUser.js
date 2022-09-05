import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
export const ViewUser = () => {

    useEffect(( ) => {
      
    getAllUsers();
    
      
    }, [])
    
    const [users, setUsers] = useState([]);

    const getAllUsers = async(data) =>{
         
        await axios.get("http://localhost:8080/user").then(res=>{
         
      
        setUsers(res.data.data);
            
        }).catch(err=>{
            console.log(err);
        });
    };
    const DeleteUser = async(id)=>{
     
        await axios.delete("http://localhost:8080/user/"+id).then(res=>{
            console.log(res);
            if(res.data.status === 200){
              
                toast.success(res.data.msg, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
           
                getAllUsers();
            }else{
              toast.error( res.data.msg, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            }
             
        }).catch(err=>{
            console.log(err);
        })
    }
  return (
    <div>
        {
             localStorage.getItem("uid") ?
      <>
    
         <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
       <h1>ViewUser</h1>
       <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Date Of Birth</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {

        users.map(doc=>{
            return(
                <tr>
                <th scope="row">{doc._id}</th>
                <td>{doc.firstName}</td>
                <td>{doc.lastName}</td>
                <td>{doc.Dob }</td>
                <td>{doc.email}</td>
                <td>{doc.contact}</td>
                <td>{doc.gender}</td>
                
              <td>
                <button onClick={()=>DeleteUser(doc._id)}  class="btn btn-danger">Delete</button>
                <button class="btn btn-danger"><Link to={`/UpdateUser/${doc._id}`}>Update</Link></button>
              </td>
              </tr>
            )
        })
    }
   
  </tbody>
</table>

</>
:<h2>err</h2>}
    </div>
  )
}
