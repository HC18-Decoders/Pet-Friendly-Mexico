const db = require('../database/index.js');
const url = require('url');
const path = require('path');
const bodyParser = require ('body-parser');

//GET requests

exports.getService = (req, res) => {
  db.getServicesProfiles()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}


exports.getPet = (req, res) => {
  db.getPetProfiles()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}
//POST requests

exports.postSingleServiceProfile = (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phoneNumber = req.body.phoneNumber;
  var streetAddress = req.body.streetAddress;
  var city = req.body.city;
  var state = req.body.state;
  var zipCode = req.body.zip
  var businessName = req.body.businessName;
  var businessType = req.body.businessType;
  db.postServicesProfiles(firstName, lastName, phoneNumber, streetAddress, city, state, zipCode, businessName, businessType)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
}



exports.postSinglePetProfile = (req, res) => {
  let petName = req.body.petName;
  let age = req.body.age;
  let breed = req.body.breed;
  let vaccines = req.body.vaccines;
  let dewormed = req.body.dewormed;
  let smallDescription = req.body.smallDescription;
  db.postPetProfile(petName, age, breed, vaccines, dewormed, smallDescription)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
}
