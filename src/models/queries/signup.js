const connection = require('../database/db_connection');
const bcrypt = require('bcrypt');

const signup = (data, callback) => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(data.password, salt);
  const sql = {
    text: 'INSERT INTO users (name,password,email,role) VALUES ($1,$2,$3,$4)',
    values: [`${data.username}`, `${passwordHash}`, `${data.email}`, 'user'],
  };
  connection.query(sql, (errRegister, result) => {
    if (errRegister) {
      callback(errRegister);
    } else {
      callback(null, true);
    }
  });
};

const signupOnwer = (data, callback) => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(data.password, salt);
  const sql = {
    text:
      'INSERT INTO shop_owner (name,password,email,shop_name,address) VALUES ($1,$2,$3,$4,$5)',
    values: [
      `${data.username}`,
      `${passwordHash}`,
      `${data.email}`,
      `${data.shopname}`,
      `${data.address}`,
    ],
  };

  connection.query(sql, (errRegisterOnwer) => {
    if (errRegisterOnwer) callback(errRegisterOnwer);
    else {
      callback(null, true);
    }
  });
};

module.exports = { signup, signupOnwer };
