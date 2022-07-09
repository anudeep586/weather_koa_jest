import knex from "../src/database/db";
import {  v4 as uuidv4 } from "uuid";
import { addWeatherDetailsService, getWDByCityService } from "./weatherService";



const axios = require("axios");


export const addWeatherDetails = async (ctx: any) => {
    try {
        const data=await addWeatherDetailsService(ctx.request.params.city)
        console.log(data)
        ctx.body = data
    }
    catch (err) {
        ctx.body = "Not Found"
        ctx.status = 400
    }

}

export const getWeatherDetailsByCity = async (ctx: any) => {
    try {
        const city=ctx.request.params.city
        const data=await getWDByCityService(city)
        ctx.body = data
    }
    catch (err) {
        ctx.body = "Not Found"
        ctx.status = 400
    }
}


const weather = () => {
    setTimeout(async () => {
        const ApiKey = '412a8367b25c43da9cb71348220907'
        let weatherdata = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
            params: { key: `${ApiKey}`, q: `${'london'}`, aqi: 'no' },
        })
        let data = weatherdata.data
        await knex("weather").insert({ id: uuidv4(), cityName: data.location.name, country: data.location.country, temp_c: data.current.temp_c, temp_f: data.current.temp_f, humidity: data.current.humidity, wind_mph: data.current.wind_mph }).returning("*")
        weather()
    }, 60000)
}
weather()