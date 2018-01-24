const dbconnection = require('../database/db_connection');

const viewAllFashion = (cb) => {
  const Sql = {
    text: 'select * from cloths ',
  };
  dbconnection.query(Sql, (error, Fashion) => {
    if (error) return cb(error);

    return cb(null, Fashion.rows);
  });
};
const viewMenFashion = (cb) => {
  const viewMenFashionSql = {
    text: "select * from cloths where gender = 'men'",
  };
  dbconnection.query(
    viewMenFashionSql,
    (dataBaseConnectionError, menFashion) => {
      if (dataBaseConnectionError) return cb(dataBaseConnectionError);

      return cb(null, menFashion.rows);
    },
  );
};

const viewSavedMenFashion = (userId, cb) => {
  const Sql = {
    text:
      'select cloths.id from cloths  JOIN saved ON cloths.id = saved.cloth_id where saved.user_id = $1',
    values: [userId],
  };
  dbconnection.query(Sql, (dataBaseConnectionError, fashionSaved) => {
    if (dataBaseConnectionError) return cb(dataBaseConnectionError);
    return cb(null, fashionSaved.rows);
  });
};

module.exports = { viewMenFashion, viewSavedMenFashion, viewAllFashion };
