const axios = require("axios");
import knex from "../src/database/db";
import { stringify, v4 as uuidv4 } from "uuid";



export const addWeatherDetailsService=async(city:string)=>{
    console.log(city)
    const ApiKey = '412a8367b25c43da9cb71348220907'
        let weatherdata = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
            params: { key: `${ApiKey}`, q: `${city}`, aqi: 'no' },
        })
        let data = weatherdata.data
       const data1= await knex("weather").insert({ id: uuidv4(), cityName: data.location.name, country: data.location.country, temp_c: data.current.temp_c, temp_f: data.current.temp_f, humidity: data.current.humidity, wind_mph: data.current.wind_mph }).returning("*")
       return data1
}

export const getWDByCityService=async(city:string)=>{
    const data = await knex("weather").where({ cityName: city }).returning("*");
    return data
}