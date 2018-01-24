const viewMenOutfits = require('../models/queries/viewMenOutfits');

exports.get = (req, res ,next) => {
  viewMenOutfits((dataBaseConnectionError, menOutfits) => {
    if (dataBaseConnectionError) return next(dataBaseConnectionError);
    return res.render('menOutfits', {
      layout: 'fashion', menOutfits, style: 'style', title: 'Men Outfits',
    });
  });
};
