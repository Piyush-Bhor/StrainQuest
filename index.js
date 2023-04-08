// import dependencies
const express = require('express');
const path = require('path');
require("dotenv").config();
const mongoose = require('mongoose');

app = express();

// paths, ejs, and url setup
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}));

// database connection
const url = process.env.CONNECTIONSTRING; 
mongoose.connect(url, {useNewUrlParser:true}) 
const con = mongoose.connection
con.on('open', ()=> {
    console.log("Database Connnected....");
});

// routes

// generate random strains

const min = 0;
const max = 70;

function generate_random_number(min, max) {
    return Math.random() * (max - min) + min;
}

/*
app.get('/',(req,res)=>{
    const CannabisAPI = require('./cannabis_random');
    const async_random = async () => {
        let strain_effect_list = [];
        let strain_name_list = [];
        let strain_image_list = [];
        let strain_thc_list = [];
        let strain_cbd_list = [];
        let strain_type_list = [];
        
        for (i = 0; i < 6; i++) {
            const response = await CannabisAPI.get_strain_by_ID(generate_random_number(min,max));
            strain_name_list[i] = response.data[0].strain;
            strain_image_list[i] = response.data[0].imgThumb;
            strain_effect_list[i] = response.data[0].goodEffects;
            strain_thc_list[i] = response.data[0].thc;
            strain_cbd_list[i] = response.data[0].cbd;
            strain_type_list[i] = response.data[0].strainType;
        }
        var pageData = {
            strain_image : strain_image_list,
            strain_name : strain_name_list,
            strain_effects : strain_effect_list,
            strain_thc : strain_thc_list,
            strain_cbd : strain_cbd_list,
            strain_type : strain_type_list
        }   
        res.render('home',pageData);
    }
    async_random();
});
*/

/* When API call limit exceeds - REMOVE DURING PRODUCTION*/
app.get('/', (req,res) => {
    let strain_effect_list = ["happy, euphoric, sleepy, relaxed", "energetic", "sleepy", "hungry", "uplifted"];
    let strain_name_list = ["Purple Kush", "Pineapple Express", "Mad Mango", "OG Kush", "Golden Goat"];
    let strain_image_list = ["","","","",""];
    let strain_thc_list = ["10","20","30","40","50"];
    let strain_cbd_list = ["10","20","30","40","50"];
    let strain_type_list = ["indica","indica","indica","sativa","hybrid"];

    var pageData = {
        strain_image : strain_image_list,
        strain_name : strain_name_list,
        strain_effects : strain_effect_list,
        strain_thc : strain_thc_list,
        strain_cbd : strain_cbd_list,
        strain_type : strain_type_list
    }   
    res.render('home',pageData);
});

/*
// search strain
const Cannabis_Search_API = require('./cannabis_search');
const async_search = async () => {
    const response = await Cannabis_Search_API.search_strain("purple kush");
    console.log(response.data[0].strain); // To get only the strain name
}
async_search()
*/


app.listen(8080);
console.log('Server running at http://localhost:8080');