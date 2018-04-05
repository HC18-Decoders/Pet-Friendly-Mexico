const mysql = require('mysql2');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);


// const getSignUp = function() {
//   return new Promise((resolve, reject) => {
//     connection.query('SELECT * FROM signUp', (err, data) => {
//       if(err) {
//         return reject(err);
//       }
//       return resolve(data);
//     })
//   })
// };
//
//
// const getLogIn = function() {
//   return new Promise((resolve, reject) => {
//     connection.query('SELECT * FROM logIn', (err, data) => {
//       if(err) {
//         return reject(err);
//       }
//       return resolve(data);
//     })
//   })
// };
//


const getVetProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM vetProfiles', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};


/*const getPetProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM petProfile', (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};*/


const postServicesProfiles = function(firstName, lastName, phoneNumber, address) {
 return new Promise((resolove, reject) => {
   connection.query('INSERT INTO servicesProfiles(firstName, lastName, phoneNumber, address) VALUES (?, ?, ?, ?)',
     [firstName, lastName, phoneNumber, address], (err, data) => {
       if(err) {
         return reject(err);
       }
       return resolve(data);
     })
  })
};


/*const postPetProfiles = function(petName, age, breed, vaccines, dewormed, smallDescription) {
 return new Promise((resolve, reject) => {
   connection.query('INSERT INTO petProfiles(petName, age, breed, vaccines, dewormed, smallDescription) VALUES(?, ?, ?, ?, ?, ?)',
     [petName, age, breed, vaccines, dewormed, smallDescription], (err, data) => {
       if(err) {
         return reject(err);
       }
       return resolve(data);
     })
  })
};*/

module.exports = {
  getServicesProfiles,
  //getPetProfiles,
  postServicesProfiles,
  //postPetProfiles
};
