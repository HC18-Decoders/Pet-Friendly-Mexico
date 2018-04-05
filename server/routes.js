const db = require('../database/index.js');
const url = require('url');
const path = require('path');
const bodyParser = require ('body-parser');

//GET requests

exports.getVet = (req, res) => {
  db.getVetProfiles()
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

exports.postSingleVetProfile = (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phoneNumber = req.body.phoneNumber;
  var address = req.body.address;
  db.postVetProfiles(firstName, lastName, phoneNumber, address)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
}

// /firstName, lastName, phoneNumber, address

exports.postSinglePetProfile = (req, res) => {
  let petName = req.body.petName;
  let age = req.body.age;
  let breed = req.body.breed;
  let vaccines = req.body.vaccines;
  let dewormed = req.body.dewormed;
  let smallDescription = req.body.smallDescription;
  db.postPetProfiles(petName, age, breed, vaccines, dewormed, smallDescription)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { alert(err) })
}

//petName, age, breed, vaccines, dewormed, smallDescription
