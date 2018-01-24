const viewWomenOutfits = require('../models/queries/viewWomenOutfits');

exports.get = (req, res, next) => {
  viewWomenOutfits((dataBaseConnectionError, womenOutfits) => {
    if (dataBaseConnectionError) return next(dataBaseConnectionError);
    return res.render('womenOutfits', {
      layout: 'fashion', womenOutfits, style: 'style', title: 'Women Outfits',
    });
  });
};
