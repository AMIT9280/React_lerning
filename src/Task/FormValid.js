import React from 'react'
import { useForm, useFormState } from 'react-hook-form'

export const FormValid = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange",});

    const submit = data =>{
        
         // var data1 = JSON.stringify(data);
         //var dat=JSON.parse(data1)
         // alert(data.Name)
    }
    const validationSchema = {

        Name: {
            required:"Name Is Required"
        },
        email :{
            required:"Email is Required"
        },
        phone :{
            pattern:{
                value: /^[6-9]{1}[0-9]{9}$/,
                 message : "Enter Valid Contact"
            }
        },
        pass:{
            min:{
                value:6, 
                message:"Min 6 Digit hut"
            }
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
            <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" name="Name"  class="form-control" id="exampleInputPassword1" placeholder="Name"
                    {...register("Name",validationSchema.Name)} />
                    {
                        errors.Name && <span>{errors.Name.message}</span>
                    }
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                     {...register("email",validationSchema.email)} />
                     {
                        errors.email && <span>{errors.email.message}</span>
                    }
                     
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="Pass" class="form-control" id="exampleInputPassword1" placeholder="Password"
                      {...register("pass",validationSchema.pass)}  />
                       {
                        errors.pass && <span>{errors.pass.message}</span>
                    }
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Phone</label>
                    <input type="text" name="contact" class="form-control" id="exampleInputPassword1" placeholder="Phone"
                     {...register("phone",validationSchema.phone)}/>
                      {
                        errors.phone && <span>{errors.phone.message}</span>
                    }
                </div>
                <br/> 
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
