// import dependencies
const express = require('express');
const path = require('path');
require("dotenv").config();

start_app = express();

// paths, ejs, and url setup
start_app.use(express.static(__dirname + '/public'));
start_app.set('view engine', 'ejs');
start_app.set('views', path.join(__dirname, 'views'));
start_app.use(express.urlencoded({extended:false}));

//route 
const app = require("./index");
start_app.use("/", app);

// server start
start_app.listen(8080);
console.log('Server running at http://localhost:8080');