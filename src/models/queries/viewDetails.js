const dbconnection = require('../database/db_connection');

const viewDetails = (imgId, cb) => {
  const sql = {
    text: 'select cloths_details.price ,cloths_details.img as detailimg, cloths_details.cloth_id, cloths_details.shop_name, cloths.img, cloths.gender from cloths_details join cloths on cloths.id = cloths_details.cloth_id where cloths_details.cloth_id = $1',
    values: [imgId],
  };
  dbconnection.query(sql, (err, details) => {
    if (err) return cb(err);
    return cb(null, details.rows);
  });
};

module.exports = viewDetails;
