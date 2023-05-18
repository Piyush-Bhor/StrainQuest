// import dependencies
const express = require('express');
const path = require('path');
require("dotenv").config();
const mongoose = require('mongoose');
const session = require('express-session');
const { auth, requiresAuth } = require('express-openid-connect');

const app = express();

// paths, ejs, and url setup
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// oauth
const config = {
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    secret: process.env.SECRET,
    authRequired: false,
    auth0Logout: true,
};

app.use(auth(config));

// database connection
const url = process.env.CONNECTIONSTRING;
mongoose.connect(url, {useNewUrlParser:true}) 
const con = mongoose.connection

// user model
const User = mongoose.model('User',{
    username: String,
    password: String
});

// strain model
const Strain = mongoose.model('Strain', {
    user: String,
    strain_name : String,
    strain_image : String,
    strain_type : String,
    strain_effects : String,
    strain_thc : String,
    strain_cbd : String
});

// session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
})); 

// routes

// generate random strains
const min = 0;
const max = 70;
function generate_random_number(min, max) {
    return Math.random() * (max - min) + min;
}

/*
app.get('/',(req,res)=>{
    const CannabisAPI = require('./api/cannabis_random');
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
        console.log(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out') // req.oidc.isAuthenticated is provided from the auth router
    }
    async_random();
});
*/

// When API call limit exceeds - ONLY FOR TESTING. REMOVE DURING PRODUCTION

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
        strain_type : strain_type_list,
    }   
    res.render('home',pageData);
    console.log(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out') // req.oidc.isAuthenticated is provided from the auth router
});

// search strain
app.get('/search',(req,res) => {
    const Cannabis_Search_API = require('./api/cannabis_search');
    const async_search = async () => {
        const response = await Cannabis_Search_API.search_strain(req.query.search);
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

// When API call limit exceeds - ONLY FOR TESTING. REMOVE DURING PRODUCTION
/* 
app.get('/search',(req,res) => {
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
        strain_type : strain_type,
        strain_thc : strain_thc,
        strain_cbd : strain_cbd,
    }
    res.render('search_results',pageData);
});
*/

/* add to collection */
app.get('/add',(req,res) => {
    if(req.session.loggedIn) {
        var strain_name = req.query.strain_name;
        const Cannabis_Search_API = require('./api/cannabis_search');
        const async_add = async () => {
            const response = await Cannabis_Search_API.search_strain(strain_name);
            strain_name = response.data[0].strain;
            strain_image = response.data[0].imgThumb;
            strain_effects= response.data[0].goodEffects;
            strain_thc = response.data[0].thc;
            strain_cbd = response.data[0].cbd;
            strain_type = response.data[0].strainType;
            
            var pageData = {
                user : req.session.username,
                strain_image : strain_image,
                strain_name : strain_name,
                strain_effects : strain_effects,
                strain_thc : strain_thc,
                strain_cbd : strain_cbd,
                strain_type : strain_type,
            }
            // check if strain is already added
            Strain.findOne({strain_name: strain_name}).then((strain) => {
                if(strain) { 
                    res.render('strain_collected', pageData);
                }
                else {
                    // add strain to db
                    var new_strain = new Strain(pageData);
                    new_strain.save();
                    res.render('strain_collected',pageData);  
                }
            }).catch((err) => {
                res.send(err);
            });
    }
        async_add();
    }
    else {
        res.redirect('/login');
    }
});

/* view collection */
app.get('/collection',(req,res) => {
    if(req.session.loggedIn) {
        Strain.find({ user : req.session.username }).exec(function(err, strains){
            var pageData = {
                strains : strains
            }
            res.render('my_collection', pageData);
        });
    }
    else {
        res.redirect('/login');
    }
});

/* delete strain */
app.get('/delete',(req,res) => {
    if(req.session.loggedIn) {
        var strain_name = req.query.strain_name;
        Strain.findOneAndDelete({strain_name:strain_name}).exec(function(err, strain){
            if(strain){
                Strain.find({ user : req.session.username }).exec(function(err, strains){
                    message = "Strain deleted successfully!";
                    var pageData = {
                        strains : strains,
                        message: message
                    }
                    res.render('my_collection', pageData);
                });
            }
        });
    }
    else {
        res.redirect('/login');
    }
});

// oauth 
app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2));
});

module.exports = app;