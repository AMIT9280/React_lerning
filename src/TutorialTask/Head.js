import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import search from '../css/search.css'
export const Head = () => {
    const [flag, setFlag] = useState(false);
    const [theme, settheme] = useState("table table-bordered table-dark");
    const [tut, setTut] = useState([]);
    const [Tut, setTuto] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    useEffect(() => {

        getAllTut();


    }, [])
    const getAllTut = async () => {

        await axios.get("https://tutorialapi1.herokuapp.com/tutorial").then(res => {
            console.log(res.data);
            setTut(res.data);
        }).catch(err => {

        });
        setFlag(true);

    }
    const getTut = async () =>{

        await axios.get("https://tutorialapi1.herokuapp.com/tutorial2/"+Tut).then(res=>{

                console.log(res.data);
                setTut(res.data)
        }).catch(err=>{

        })
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">  Tutorial</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='search'>
                <h3 className='s'>Search Tutorial</h3>
                <form onSubmit={handleSubmit(getTut)} class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                     {...register("search")}  onChange={(search) => setTuto(search.target.value)}/>
                    <br />
                    <button  class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>

            {/* Data Table */}
            <div className='Datatable'>
                <td>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">

                        <label class="btn btn-light">
                            <input type="radio" name="options" id="option1" autocomplete="off" value="light"
                                onChange={() => settheme('table table-bordered table-light')} />Light
                        </label>
                        <label class="btn btn-dark">
                            <input type="radio" name="options" id="option2" autocomplete="off" value="dark"
                                onChange={() => settheme('table table-bordered table-dark')} /> Dark
                        </label>
                    </div>
                </td>

                <table className={theme}>
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">title</th>
                            <th scope="col">description</th>
                            <th scope="col">published</th>
                            <th scope="col">fees</th>
                        </tr>
                    </thead>
                    {flag ?
                        <tbody>
                            {tut.map(t => {
                                return (
                                    <tr>
                                        <td scope="row">
                                            {
                                                <h6>{t.id}</h6>
                                            }
                                        </td>
                                        <td scope="row">
                                            {
                                                <h6>{t.title}</h6>
                                            }
                                        </td>
                                        <td scope="row">
                                            {
                                                <h6>{t.description}</h6>
                                            }
                                        </td>
                                        <td scope="row">
                                            {
                                             
                                                <h6>{ t.published ?"Yes" : "NO"  }</h6>
                                            }
                                        </td>
                                        <td scope="row">
                                            {
                                                <h6>{ t.fees   }</h6>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                            }



                        </tbody>
                        : null}
                </table>

            </div>
        </div>
    )
}
