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
