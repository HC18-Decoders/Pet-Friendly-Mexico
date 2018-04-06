const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

//GET routing



app.get('/searchresults', route.getVet)


//POST requests

app.post('/userprofile', route.postSinglePetProfile)

app.post('/servicesprofile', route.postSingleVetProfile)


// app.post('vetProfiles', route.vetProfiles)

module.exports = app;
