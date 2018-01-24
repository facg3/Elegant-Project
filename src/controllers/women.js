const viewWomenFa = require('../models/queries/viewWomenFashion');

exports.get = (req, res,next) => {
  viewWomenFa((dataBaseConnectionError, womenFashion) => {
    if (dataBaseConnectionError) return next(dataBaseConnectionError);
    return res.render('women', {
      layout: 'fashion', womenFashion, style: 'style', title: 'Women Fashion',
    });
  });
};
