const axios = require("axios");

const BASE_URL = 'https://weed-strain1.p.rapidapi.com/'

module.exports = {
    search_strain: (user_strain) => axios({
        method:"GET",
        url : BASE_URL,
        headers: {
            'X-RapidAPI-Key': process.env.APIKEY,
            'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
        },
        params: {
            search: user_strain,
        }
    })
}