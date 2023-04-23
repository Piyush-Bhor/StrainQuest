const app = require("../index");
const request = require("supertest");
const express = require("express");
const start_app = express();

start_app.use(express.urlencoded({ extended: false }));
start_app.use("/", app);

// home
test("app route works", done => {
    request(start_app)
        .get("/")
        .expect(200, done);
});

// search_results
test("app route works", done => {
    request(start_app)
        .get("/search")
        .expect(200, done);
}); 

// my_collections
test("app route works", done => {
    request(start_app)
        .get("/collection")
        .expect(302, done);
}); 

// login_form
test("app route works", done => {
    request(start_app)
        .get("/login")
        .expect(200, done);
}); 

// signup_form
test("app route works", done => {
    request(start_app)
        .get("/signup")
        .expect(200, done);
}); 
