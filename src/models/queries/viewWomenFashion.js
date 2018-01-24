const dbconnection = require('../database/db_connection');

const viewWomFashion = (cb) => {
  const viewWomFashionSql = {
    text: "select * from cloths where gender = 'women'",
  };
  dbconnection.query(
    viewWomFashionSql,
    (dataBaseConnectionError, womenFashion) => {
      if (dataBaseConnectionError) return cb(dataBaseConnectionError);

      return cb(null, womenFashion.rows);
    },
  );
};

module.exports = viewWomFashion;
