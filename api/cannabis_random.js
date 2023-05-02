const axios = require("axios");

const BASE_URL = 'https://weed-strain1.p.rapidapi.com/'

module.exports = {
    get_strain_by_ID: (user_strain_id) => axios({
        method:"GET",
        url : BASE_URL,
        headers: {
            'X-RapidAPI-Key': process.env.APIKEY,
            'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
        },
        params: {
            id : user_strain_id,
        }
    })
}