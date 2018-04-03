const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const db = require('../database/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));




//app.get('/signUp', route.getSignUp)

//app.get('/logIn', route.getLogIn)

<<<<<<< 702a37c4bcc563983b5205048c6c4c1ed1caf0a9
app.get('/vetProfiles', route.getVetProfile)
=======
app.get('/vetProfile', route.getVetProfile)
>>>>>>> fixed all conflicts on server config file and style.css

app.get('/petProfiles', route.getPetProfile)

app.post('vetProfiles', route.vetProfiles)

module.exports = app;
