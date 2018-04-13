const db = require('../database/index.js');
const url = require('url');
const path = require('path');

//GET requests

exports.getVet = (req, res) => {
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
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let phoneNumber = req.body.phoneNumber;
  let address = req.body.address;
  let businessName = req.body.businessName;
  let businessType = req.body.businessType;
  db.postServicesProfiles(firstName, lastName, phoneNumber, address, businessName, businessType)
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
