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


const getLogIn = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM logIn', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};


const postVetProfile = function() {
  return new Promise((resolove, reject) => {
    connection.query('INSERT INTO vetProfile(first_name, last_name, phone_number, address) VALUES (?, ?, ?, ?)',
      [], (err, data) => {
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


const postPetProfile = function() {
  return new Promise((resolve, data) => {
    connection.query('INSTER INTO () VALUES (?, ?, ?, ?, ?, ?)',
      [], (err, data) => {
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
  getSignUp,
  getLogIn,
  getVetProfile,
  getPetProfile
};
