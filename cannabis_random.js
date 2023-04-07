const axios = require("axios");

const BASE_URL = 'https://weed-strain1.p.rapidapi.com/'

module.exports = {
    get_strain_by_ID: (user_strain_id) => axios({
        method:"GET",
        url : BASE_URL,
        headers: {
            'X-RapidAPI-Key': '97332acbffmsh8a6ccd361fed272p16e3b9jsn01f04ac5f70e',
            'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
        },
        params: {
            id : user_strain_id,
        }
    })
}