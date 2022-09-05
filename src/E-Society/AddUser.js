import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const AddUser = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const submit = async (data) => {
       
        await axios.post("http://localhost:8080/user", data).then(res => {
            console.log(res.data);
            localStorage.setItem("data",JSON.stringify(res.data.data))
            if (res.data.Status === 200) {


                navigate("/GetUser");
            } else {
                toast.error(res.data.msg, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }


        }).catch(err => {
            console.log(err);
            alert("Error")
        })
    }
    const validationSchema = {
        firstName: {
            required: "*First Name Is Required",
            pattern: {
                
                message: "*Enter Only Character"
            }
        },
        lastName: {
            required: "*Last Name Is Required",
            pattern: {
                
                message: "*Enter Only Character"
            }
        },
        Dob: {
            required: "*Date Of Birth Is Required"
        },
        gender:{
            required:"*Gender Is Required"
        },
        contact: {
            required: "*Contact Is Required",
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "*Enter Valid Number"
            }
        },
        email: {
            required: "*Email Is Required",
            pattern: {
                value:/^[a-zA-Z0-9]+@[a-zA-Z]{2,6}\.[a-zA-Z]{2,3}$/,
                message: "*Enter Valid Email"
            }
        },
        password: {
            required: "*Password Is Required",
            min: {
                value: 6,
                message: "*Enter Valid Password "
            }
            
        },
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
            <h1>Add User</h1>
            <br />
            <form onSubmit={handleSubmit(submit)}>
                <div className="form-group">
                    <label for="exampleInputEmail1">First name</label>
                    <input type="text" class="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name"
                        {...register("firstName", validationSchema.firstName)} />
                    {
                        errors.firstName && <span>{errors.firstName.message}</span>
                    }
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Last name</label>
                    <input type="text" class="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last name"
                        {...register("lastName", validationSchema.lastName)} />
                    {
                        errors.lastName && <span>{errors.lastName.message}</span>
                    }
                </div> <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Date Of Birth</label>
                    <input type="Date" class="form" id="exampleInputEmail1" aria-describedby="emailHelp"
                        {...register("Dob", validationSchema.Dob)} />
                    {
                        errors.Dob && <span>{errors.Dob.message}</span>
                    }
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Gender </label>&nbsp;
                    Male<input type="radio" class="form" id="exampleInputEmail1" value="Male" name="Gender" aria-describedby="emailHelp"   {...register("gender",validationSchema.gender)} />
                    Female<input type="radio" class="form" id="exampleInputEmail1" value="Female" name="Gender" aria-describedby="emailHelp"  {...register("gender",validationSchema.gender)} />
                    Other<input type="radio" class="form" id="exampleInputEmail1" value="Other" name="Gender" aria-describedby="emailHelp"  {...register("gender",validationSchema.gender)} />
                    {
                        errors.gender && <span>{errors.gender.message}</span>
                    }
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Contact</label>
                    <input type="text" class="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Contact"
                        {...register("contact",validationSchema.contact)} />
                        {
                            errors.contact && <span>{errors.contact.message}</span>
                        }
                </div> <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        {...register("email",validationSchema.email)} />
                        {
                            errors.email && <span>{errors.email.message}</span>
                        }

                    <br />
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="text" class="form" id="exampleInputPassword1" placeholder="Password"
                        {...register("password",validationSchema.password)} />
                         {
                            errors.password && <span>{errors.password.message}</span>
                        }
                </div>
                
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};
