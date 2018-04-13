const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));



app.get('/results', route.getVet)


app.get('/profile', route.getPet)

// app.get('/profile?:id', route.getProfile)


//POST requests

app.post('/profile', route.postSinglePetProfile)


app.post('/serviceprofile', route.postSingleServiceProfile)

module.exports = app;
