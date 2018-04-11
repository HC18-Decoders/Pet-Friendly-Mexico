const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));



<<<<<<< HEAD
app.get('/results', route.getVet)
app.get('/profile', route.getPet)

=======
app.get('/searchresults', route.getVet)

//app.get('userprofile', route.getPet)

>>>>>>> 72caff336d0e2b57eae768ca19d5c11fcd2ae451
// app.get('/profile?:id', route.getProfile)


//POST requests

<<<<<<< HEAD
app.post('/profile', route.postSinglePetProfile)

=======
app.post('/userprofile', route.postSinglePetProfile)

app.post('/servicesprofile', route.postSingleServiceProfile)
>>>>>>> 72caff336d0e2b57eae768ca19d5c11fcd2ae451

app.post('/serviceprofile', route.postSingleServiceProfile)

module.exports = app;
