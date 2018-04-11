const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));



app.get('/searchresults', route.getVet)

//app.get('userprofile', route.getPet)

// app.get('/profile?:id', route.getProfile)


//POST requests

app.post('/userprofile', route.postSinglePetProfile)

app.post('/servicesprofile', route.postSingleServiceProfile)

app.post('/serviceprofile', route.postSingleServiceProfile)

module.exports = app;
