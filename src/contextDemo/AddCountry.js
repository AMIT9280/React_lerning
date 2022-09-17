import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ADD_COUNTRY,DELETE_COUNTRY } from "../Const";
import { AppContext } from './context';
export const AddCountry = () => {
    
    var { dispatchAction } = useContext(AppContext);
    const {register,handleSubmit} = useForm();
    const submit = data =>{
        dispatchAction(ADD_COUNTRY,data);
    }
  return (
    <div>
        Add Country
         <form onSubmit={handleSubmit(submit)}>
        <input type="text"  {...register("name")} />
        <input type="text"  {...register("capital")} />
        <input type="text"  {...register("population")} />
        <input type="submit" value="ADD_COUNTRY" />

    </form>
    </div>
  )
}
