import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList';
import employees from '../css/employees.css';
import { EmployeeRegistration } from './EmployeeRegistration';
export const Employee = () => {
    const deleteEmployee = (emp) => {

        employees = employees.filter((e) => e.id !== emp.id);
        console.log(emp);
        setemployees(employees);
    };
    const addEmployee = (emp) => {

        console.log(emp)

        employees = [...employees, emp]

        setemployees(employees)
        console.log(employees);
    }



    var [employees, setemployees] = useState([
        {

            id: 1,
            Name: 'Amit',
            age: 23,
            Salary: 25000.00,
            isActive: true
        },
        {

            id: 2,
            Name: 'Saaj',
            age: 22,
            Salary: 23000.00,
            isActive: true
        },
        {

            id: 3,
            Name: 'Sahdev',
            age: 20,
            Salary: 25500.00,
            isActive: false
        },
        {

            id: 4,
            Name: 'Keval',
            age: 21,
            Salary: 5000.00,
            isActive: true
        }
    ])
    return (
        <div className='employees'>
            <EmployeeRegistration addEmployee={addEmployee} />
            <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
        </div>
    )
}
