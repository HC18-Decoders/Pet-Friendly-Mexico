const db = require('../database/index.js');
const url = require('url');
const path = require('path');
const bodyParser = require ('body-parser');


// exports.getSignUp = (req, res) => {
//   db.getSignUp()
//     .then(data => {
//       res.status(200).send(data)
//     })
//     .catch(err => { console.log(err) })
// }
//
//
// exports.getLogIn = (req, res) => {
//   db.getLogIn()
//     .then(data => {
//       res.status(200).send(data)
//     })
//     .catch(err => { console.log(err) })
// }



exports.getSingleVetProfile = (req, res) => {
  db.getVetProfiles()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}


/*exports.getPet = (req, res) => {
  db.getPetProfiles()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => { console.log(err) })
}*/


exports.postSinglServiceProfile = (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phoneNumber = req.body.phoneNumber;
  var address = req.body.address;
  db.postServicesProfiles(firstName, lastName, phoneNumber, address)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
}


/*exports.postSinglePetProfile = (req, res) => {
  var petName = req.body.petName;
  var age= req.body.age;
  var breed = req.body.breed;
  var vaccines = req.body.vaccines;
  var dewormed = req.body.dewormed;
  var smallDescription = req.body.smallDescription;
  db.postPetProfiles(petName, age, breed, vaccines, dewormed, smallDescription)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => { console.log(err) })
}*/
