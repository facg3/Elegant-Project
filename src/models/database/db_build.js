
const fs = require('fs');

const dbConnection = require('./db_connection.js');

const sql = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString();

dbConnection.query(sql, (errDB, result) => {
  if (errDB) {
    console.log('Error', errDB);
  } else {
    console.log('Building successfuly!', result);
  }
});