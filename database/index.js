const mysql = require('mysql2');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getPetProfile = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM petProfile', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};
