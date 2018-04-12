const mysql = require('mysql2');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


const getServicesProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM servicesProfiles', (err, data) => {
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





const postPetProfile = function(petName, age, breed, vaccines, dewormed, smallDescription) {
 return new Promise((resolve, reject) => {
   connection.query('INSERT INTO petProfiles(petName, age, breed, vaccines, dewormed, smallDescription) VALUES(?, ?, ?, ?, ?, ?)',
     [petName, age, breed, vaccines, dewormed, smallDescription], (err, data) => {
       if(err) {
         return reject(err);
       }
       return resolve(data);
     })
  })
};

module.exports = {
  getServicesProfiles,
  getPetProfiles,
  postServicesProfiles,
  postPetProfile
};
