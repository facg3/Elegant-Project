const dbconnection = require('../database/db_connection');

const viewMenOutfits = (cb) => {
  const viewMenOutfitsSql = {
    text: 'select * from outfits where gender = \'men\'',
  };
  dbconnection.query(viewMenOutfitsSql, (dataBaseConnectionError, menOutfits) => {
    if (dataBaseConnectionError) return cb(dataBaseConnectionError);

    return cb(null, menOutfits.rows);
  });
};

module.exports = viewMenOutfits;
