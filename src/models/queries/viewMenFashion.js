const dbconnection = require('../database/db_connection');

const viewMenFashion = (cb) => {
  const viewMenFashionSql = {
    text: 'select * from cloths where gender = \'men\'',
  };
  dbconnection.query(viewMenFashionSql, (dataBaseConnectionError, menFashion) => {
    if (dataBaseConnectionError) return cb(dataBaseConnectionError);

    return cb(null, menFashion.rows);
  });
};

module.exports = viewMenFashion;
