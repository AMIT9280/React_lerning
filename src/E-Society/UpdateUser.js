import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

export const UpdateUser = () => {
    var uId = useParams()._id
    const [users, setUsers] = useState([]);
    var {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {

        getUserById();

    }, [])

    const getUserById = async () => {

        await axios.get("http://localhost:8080/user/" + uId).then(res => {
            console.log(res.data.data);
            setUsers(res.data.data);
           

        }).catch(err => {
            console.log(err);
        })
    }
    const navigate = useNavigate();
    const submit = async (data) => {
        await axios.put("http://localhost:8080/user/" + uId, data).then(res => {
            if(res.status === 200){
                toast.success('User Updated', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    navigate("/GetUser");
            }
            navigate("/GetUser");
        }).catch(err => {
            console.log(err);
        })
    }
    return (

        <div>
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
            <h1>Update User</h1>
            <br />
            <form onSubmit={handleSubmit(submit)}>
                <div className="form-group">
                    <label for="exampleInputEmail1">First name</label>
                    <input type="text" class="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last name"
                        {...register("firstName")} defaultValue={users.firstName} />
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Last name</label>
                    <input type="text" class="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last name"
                        {...register("lastName")} defaultValue={users.lastName} />
                </div> <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Date Of Birth</label>
                    <input type="Date" class="form" id="exampleInputEmail1" aria-describedby="emailHelp"
                        {...register("Dob")} defaultValue={users.Dob} />
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Gender </label>&nbsp;
                    Male<input type="radio" class="form" id="exampleInputEmail1" value="Male" name="Gender" aria-describedby="emailHelp"   {...register("gender")} />
                    Female<input type="radio" class="form" id="exampleInputEmail1" value="Female" name="Gender" aria-describedby="emailHelp"  {...register("gender")} />
                    Other<input type="radio" class="form" id="exampleInputEmail1" value="Other" name="Gender" aria-describedby="emailHelp"  {...register("gender")} />
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Contact</label>
                    <input type="text" class="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Contact"
                        {...register("contact")} defaultValue={users.contact} />
                </div> <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        {...register("email")} defaultValue={users.email} />

                    <br />
                </div>
                <br />

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
