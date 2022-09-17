import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const login = async()=>{

         axios.get("http://localhost:8080/user").then(res=>{
                console.log(res.data.data);
                localStorage.setItem("uName",JSON.stringify(res.data.data[0].firstName))
                 toast.success(res.data.msg, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
        }).catch(err=>{
            console.log(err);
        })
    }
    const validationSchema = {
       
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
            <h1>Login</h1>
            <br />
            <form onSubmit={handleSubmit(login)}>
                 
                {/* <div className="form-group">
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
                
                <br /> */}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}
