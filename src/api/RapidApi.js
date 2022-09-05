import React, { useState } from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form'
import main from '../css/main.css'
import Datatable from '../css/Datatable.css'



export const RapidApi = () => {


    const [weather, setWeather] = useState("");
    const [city, setcity] = useState();
    const [country, setcountry] = useState();
    const [flag, setFlag] = useState(false);
    const [theme, settheme] = useState("table table-bordered table-dark");
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });



    const validationSchema = {

        City: { required: "City Is Require" },
        Country: { required: "Country Is Require" }
    }

    const getWeather = async () => {
        await axios.get("https://aerisweather1.p.rapidapi.com/observations/" + city + "," + country, {
            headers: {
                "X-RapidAPI-Key": "e232036b69msh7345725b5d4eeabp167d8djsnbd2bbf6cbf7c",
                "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",

            },
        }).then((res) => {

            setWeather(res.data);
            console.log("----", weather);


        }).catch((err) => {
            console.log(err);
        })
        setFlag(true);
    }
    console.log(weather);
    return (
        <div className='bg'>
            <div className='main'>
                <h1>Weather Update</h1>
                <br />
                <form onSubmit={handleSubmit(getWeather)}>
                    <table>
                        <tr>
                            <td> <label> <b>Country</b> </label></td>
                            <td>   <input type="text" name="Country" placeholder="India" {...register("Country", validationSchema.Country)}
                                onChange={(country) => setcountry(country.target.value)}
                            /></td>
                            <td>
                                {
                                    errors.Country && <span>{errors.Country.message}</span>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td><label><b>City</b></label></td>
                            <td>  <input type="text" name="City" placeholder="Ahmadabad" {...register("City", validationSchema.City)}
                                onChange={(city) => setcity(city.target.value)}
                            /> </td>
                            <td>{
                                errors.City && <span >{errors.City.message}</span>
                            }</td>
                        </tr>
                        <br />
                    </table>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>



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
                            <th scope="col">Name</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    {flag ?
                        <tbody>
                            <tr>
                                <td scope="row">Country</td>
                                <td>

                                    {
                                        <h6>{weather.response.place.country}</h6>
                                    }
                                </td>

                            </tr>
                            <tr>
                                <td scope="row">City</td>
                                <td>  {
                                    <h6>{weather.response.place.name}</h6>
                                }
                                </td>

                            </tr>
                            <tr>
                                <td scope="row">Sun Rise Time</td>
                                <td colspan="2">
                                    {
                                        <h6>{weather.response.ob.sunriseISO.toString().slice(0, -6)}</h6>
                                    }
                                </td>

                            </tr>
                            <tr>
                                <td scope="row">Sun Set Time</td>
                                <td colspan="2">
                                    {
                                        <h6>{weather.response.ob.sunsetISO.toString().slice(0, -6)}</h6>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">Weather</td>
                                <td colspan="2">
                                    {
                                        <h6>{weather.response.ob.weather}</h6>
                                    }
                                    {
                                        <h6>{weather.response.ob.weather == "Hazy" || weather.response.ob.weather == "Cloudy with Haze" ? <img src="img/hazy.gif" height={"200px"}></img> : null}</h6>
                                    }
                                    {
                                        <h6> {weather.response.ob.weather == "Mostly Cloudy" ? <img src="img/cloud.gif" height={"200px"}></img> : null}</h6>
                                    }
                                    {
                                        <h6> {weather.response.ob.weather == "Mostly Cloudy with Showers Nearby" ? <img src="img/rain_clouds.gif" height={"200px"}></img> : null}</h6>
                                    }
                                    {
                                        <h6> {weather.response.ob.weather == "Mostly Cloudy with Haze" ? <img src="img/cloud_haze.gif" height={"200px"}></img> : null}</h6>
                                    }
                                    {
                                        <h6> {weather.response.ob.weather == "Cloudy with Light Rain" ? <img src="img/light_rain.gif" height={"200px"}></img> : null}</h6>
                                    }

                                </td>
                            </tr>
                            <tr>
                                <td scope="row">tempC</td>
                                <td colspan="2">
                                    {
                                        <h6>{weather.response.ob.tempC}<sup>o</sup></h6>
                                    }
                                </td>

                            </tr>
                            <tr>
                                <td scope="row">Humidity</td>
                                <td colspan="2">
                                    {
                                        <h6>{weather.response.ob.humidity}</h6>
                                    }
                                </td>

                            </tr>
                            <tr>
                                <td scope="row">Currant Time</td>
                                <td colspan="2">
                                    {
                                        <h6>{Date(weather.response.obDateTime).toString().slice(0, -30)}</h6>
                                    }
                                </td>

                            </tr>
                        </tbody>
                        : null}
                </table>

            </div>


        </div>

    )
}
