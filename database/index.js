const mysql = require('mysql2');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const vetPetProfile = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM vetProfile', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};
