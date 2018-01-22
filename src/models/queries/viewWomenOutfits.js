const dbconnection = require('../database/db_connection');

const viewWomenOutfits = (cb) => {
  const viewWomenOutfitsSql = {
    text: 'select * from outfits where gender = \'women\'',
  };
  dbconnection.query(viewWomenOutfitsSql, (dataBaseConnectionError, womenOutfits) => {
    if (dataBaseConnectionError) return cb(dataBaseConnectionError);

    return cb(null, womenOutfits.rows);
  });
};

module.exports = viewWomenOutfits;
