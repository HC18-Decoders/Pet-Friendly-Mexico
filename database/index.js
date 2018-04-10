const mysql = require('mysql2');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


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


const getPetProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM petProfiles', (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};


const postServicesProfiles = function(firstName, lastName, phoneNumber, address, businessName, businessType) {
 return new Promise((resolove, reject) => {
   connection.query('INSERT INTO servicesProfiles(firstName, lastName, phoneNumber, address, businessName, businessType) VALUES (?, ?, ?, ?, ?, ?)',
     [firstName, lastName, phoneNumber, address, businessName, businessType], (err, data) => {
       if(err) {
         return reject(err);
       }
       return resolve(data);
     })
  })
};







module.exports = {
  getVetProfiles,
  postServicesProfiles,
  postPetProfiles
};
