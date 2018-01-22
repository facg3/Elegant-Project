const viewWomenOutfits = require('../models/queries/viewWomenOutfits');

exports.get = (req, res) => {
  viewWomenOutfits((dataBaseConnectionError, womenOutfits) => {
    if (dataBaseConnectionError) return res.status(500).send({ error: dataBaseConnectionError });
    return res.render('womenOutfits', {
      layout: 'fashion', womenOutfits, style: 'style', title: 'Women Outfits',
    });
  });
};
