const db = require('../database/index.js');
const url = require('url');
const path = require('path');


exports.getSignUp = (req, res) => {
  db.getSignUp()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}


exports.getLogIn = (req, res) => {
  db.getLogIn()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}



exports.getVetProfile = (req, res) => {
  db.getVetProfile()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}


exports.getPetProfile = (req, res) => {
  db.getPetProfile()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}
