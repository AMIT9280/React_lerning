import React, { useState } from 'react'

export const EmployeeRegistration = (props) => {

    const [id, setid] = useState('');
    const [Name, setname] = useState('')
    const [age, setage] = useState('')
    const [Salary, setsalary] = useState('')
    const [isActive, setisActive] = useState('')

    const submit =(e)=>{
        e.preventDefault();
        var emp = {
            id:id,
            Name:Name,
            age:age,
            Salary:Salary,
            isActive:isActive
        }
        props.addEmployee(emp)
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='id'>Id</label>
                    <input type="text" onChange={(e) => setid(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='firstName'>FirstName</label>
                    <input type="text" onChange={(e) => setname(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='Age'>Age</ label>
                    <input type="text" onChange={(e) => setage(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='salary'>Salary</label>
                    <input type="text" onChange={(e) => setsalary(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='status'>Status </label>
                    <input type="text" onChange={(e) => setisActive(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="submit"></input>
                </div>
            </form>
        </div>
    )
}
