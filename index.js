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

/* When API call limit exceeds - ONLY FOR TESTING. REMOVE DURING PRODUCTION*/
app.get('/', (req,res) => {
    let strain_effect_list = ["happy, euphoric, sleepy, relaxed", "energetic", "sleepy", "hungry", "uplifted"];
    let strain_name_list = ["Purple Kush", "Pineapple Express", "Mad Mango", "OG Kush", "Golden Goat"];
    let strain_image_list = ["https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"];
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


// search strain

/*
app.get('/search',(req,res) => {
    const Cannabis_Search_API = require('./cannabis_search');
    const async_search = async () => {
        const response = await Cannabis_Search_API.search_strain(req.query.query);
        strain_name = response.data[0].strain;
        strain_image = response.data[0].imgThumb;
        strain_effects= response.data[0].goodEffects;
        strain_thc = response.data[0].thc;
        strain_cbd = response.data[0].cbd;
        strain_type = response.data[0].strainType;

        var pageData = {
            strain_image : strain_image,
            strain_name : strain_name,
            strain_effects : strain_effects,
            strain_thc : strain_thc,
            strain_cbd : strain_cbd,
            strain_type : strain_type
        }
        res.render('search_results',pageData);
    }
    async_search();
});
*/

/* When API call limit exceeds - ONLY FOR TESTING. REMOVE DURING PRODUCTION*/
app.get('/search',(req,res) => {
    const Cannabis_Search_API = require('./cannabis_search');
    const async_search = async () => {
        const response = await Cannabis_Search_API.search_strain(req.query.query);
        strain_name = "Purple Kush";
        strain_image = "https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
        strain_effects= "happy, euphoric, sleepy, relaxed";
        strain_thc = "10";
        strain_cbd = "20";
        strain_type = "indica";

        var pageData = {
            strain_image : strain_image,
            strain_name : strain_name,
            strain_effects : strain_effects,
            strain_thc : strain_thc,
            strain_cbd : strain_cbd,
            strain_type : strain_type
        }
        res.render('search_results',pageData);
    }
    async_search();
});

app.get('/signup',(req,res) => {
    res.render('signup_form');
});

app.get('/login',(req,res) => {
    res.render('login_form');
});

app.listen(8080);
console.log('Server running at http://localhost:8080');