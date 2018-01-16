const fs = require('fs');

const buildDatabase = () => {
  const connection = require('./dbConnection');
  const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

  connection.query(sql, (errDb, result) => {
    if (errDb) {
      console.log(errDb, 'Error');
    } else {
      console.log('Database Created');
    }
  });
};
buildDatabase();
module.exports = buildDatabase;
