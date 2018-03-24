const db = require('../database/index.js');
const url = require('url');
//const path = require('path');


export.getVetProfile = (req, res) => {
  db.getVetProfile()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}


export.getPetProfile = (req, res) => {
  db.getPetProfile()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}
