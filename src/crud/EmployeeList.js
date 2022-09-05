import React from 'react'
import { Employee } from './Employee'

export const EmployeeList = (props) => {
    return (
        <div >
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employees => {

                        return (
                            <tr>
                                <th scope="row">{employees.id}</th>
                                <td>{employees.Name}</td>
                                <td>{employees.age}</td>
                                <td>{employees.Salary}</td>
                                <td>{employees.isActive ? "Active" : "Not Active"}</td>
                                <td><button onClick={() => { props.deleteEmployee(employees) }} type="button" class="btn btn-danger">Delete</button></td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
