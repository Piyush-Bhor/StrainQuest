// import dependencies
const express = require('express');
const path = require('path');
require("dotenv").config();
const mongoose = require('mongoose');
const session = require('express-session');
const { auth, requiresAuth } = require('express-openid-connect');
const port = process.env.PORT || 3000

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

// session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
})); 

//routers
const strainRouter = require('./routes/strain');

// routes
app.use('/', strainRouter);

// oauth 
app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2));
});

// server
app.listen(port,() => {
    console.log('Server running at http://localhost:8080');
});