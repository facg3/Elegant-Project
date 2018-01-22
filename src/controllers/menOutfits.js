const viewMenOutfits = require('../models/queries/viewMenOutfits');

exports.get = (req, res) => {
  viewMenOutfits((dataBaseConnectionError, menOutfits) => {
    if (dataBaseConnectionError) return res.status(500).send({ error: dataBaseConnectionError });
    return res.render('menOutfits', {
      layout: 'fashion', menOutfits, style: 'style', title: 'Men Outfits',
    });
  });
};
