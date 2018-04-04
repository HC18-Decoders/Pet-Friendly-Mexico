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


const getServiceProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM serviceProfile', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};


const getPetProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM petProfile', (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};


const postServiceProfiles = function(firstName, lastName, phoneNumber, address) {
 return new Promise((resolove, reject) => {
   connection.query('INSERT INTO serviceProfiles(firstName, lastName, phoneNumber, address) VALUES (?, ?, ?, ?)',
     [firstName, lastName, phoneNumber, address], (err, data) => {
       if(err) {
         return reject(err);
       }
       return resolve(data);
     })
 })
};

module.exports = {
  getServiceProfiles,
  getPetProfiles,
  postServiceProfiles
};
