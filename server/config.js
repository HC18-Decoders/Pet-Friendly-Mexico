const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

//GET routing



app.get('/vetProfiles', route.getSingleVetProfile)

//app.get('/petProfiles', route.getPet)

//app.post('/petProfiles', route.postSinglePetProfile)

app.post('/servicesProfiles', route.postSinglServiceProfile)

app.get('/searchresults', route.getVet)


//POST requests

app.post('/userprofile', route.postSinglePetProfile)

app.post('/servicesprofile', route.postSingleVetProfile)



