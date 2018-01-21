const dbconnection = require('../database/db_connection');

const savedFashion = (userId, cb) => {
  const savedFashionSql = {
    text: 'select cloths.img, cloths.title, cloths.price, cloths.gender from cloths inner join saved on saved.cloth_id = cloths.id and user_id = $1',
    values: [userId],

  };
  dbconnection.query(savedFashionSql, (dataBaseConnectionError, savedfashion) => {
    if (dataBaseConnectionError) return cb(dataBaseConnectionError);

    return cb(null, savedfashion.rows);
  });
};

const saved = (userId, clothId, cb) => {
  const savedSql = {
    text: 'insert into saved (user_id, cloth_id) values ($1, $2)',
    values: [userId, clothId],
  };
  dbconnection.query(savedSql, (dataBaseConnectionError, successSaved) => {
    if (dataBaseConnectionError) return cb(dataBaseConnectionError);
    return cb(null, true);
  });
};
module.exports = { savedFashion, saved };
