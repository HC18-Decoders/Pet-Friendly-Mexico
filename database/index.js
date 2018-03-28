const mysql = require('mysql2');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getSignUp = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM signUp', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};

const getVetProfile = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM vetProfile', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};


const getPetProfile = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM petProfile', (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};

module.exports = {
  getVetProfile,
  getPetProfile
};
