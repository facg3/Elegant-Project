const connection = require('../database/db_connection');
const bcrypt = require('bcrypt');

const login = (dataUser, cb) => {
  const sql = {
    text: 'SELECT * FROM users WHERE name= $1',
    values: [dataUser.username],
  };
  connection.query(sql, (err, result) => {
    if (err) {
      cb(err, null);
    } else if (result.rows.length === 0) {
      console.log(result.rows.length);
      cb(err, null);
    } else {
      const passwordFromDB = result.rows[0].password;
      const passwordFromUser = dataUser.password;
      const passwordCom = bcrypt.compareSync(passwordFromUser, passwordFromDB);
      cb(null, passwordCom, result.rows);
    }
  });
};

module.exports = { login };
