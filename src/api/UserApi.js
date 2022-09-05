import axios from 'axios'
import React from 'react'

export const UserApi = () => {
    const getApiData = () => {

        axios.get("https://reqres.in/api/users?page=2")
            .then(res => {


            })
    }
    return (
        <div>

        </div>
    )
}
