import React from 'react'
import { useForm } from 'react-hook-form'

export const StudentsRegistration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange",});

    const submit = data => {
        alert(JSON.stringify(data))
    };
    const validationSchema = {

        name: { required: "Name Is Require" },
        age: {
            min:{
            value: 18,
            message: "Age Must Be Greater Than 18"
            }
        },
        phone:{
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "Number Is Not Valid"
            }
        },
        hobbies:{
            min:{
                value:[2],
                message:"Min Two Selected Require"
            }
        }

    }
    console.log(errors);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" {...register("name", validationSchema.name)} />
                    {
                        errors.name && <span>{errors.name.message}</span>
                    }
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" name="age" {...register("age", validationSchema.age)} />
                    {
                        errors.age && <span>{errors.age.message}</span>
                    }
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" name="phone" {...register("phone", validationSchema.phone)} />
                    {
                        errors.phone && <span>{errors.phone.message}</span>
                    }
                </div>
                <div>
                    <label>Gender :</label>
                        Male<input type="radio" name="Gender" checked value="Male" {...register("Gender")}/>
                        Female<input type="radio" name="Gender" value="Female" {...register("Gender")}/>
                </div>
                <div>
                    <label>Hobbies :</label>
                        Music<input type="checkbox" name="hobbies"  checked value="Music" {...register("hobbies", validationSchema.hobbies)}/>
                        Traveling<input type="checkbox" name="hobbies" value="Traveling" {...register("hobbies", validationSchema.hobbies)}/>
                        Reading<input type="checkbox" name="hobbies" value="Reading" {...register("hobbies", validationSchema.hobbies)}/>
                        {
                        errors.hobbies && <span>{errors.hobbies.message}</span>
                    }
                </div>
                <div>
                    <label>Country :</label>
                       <select name='country' {...register("country")}> 
                        <option value="india">India</option>
                        <option value="Canada">Canada</option>
                        <option value="USA">USA</option>
                        <option value="Nepal">Nepal</option>

                        </select> 
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
