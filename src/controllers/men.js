const viewMenFa = require('../models/queries/viewMenFashion');

exports.get = (req, res, next) => {
  viewMenFa((dataBaseConnectionError, menFashion) => {
    if (dataBaseConnectionError) return next(dataBaseConnectionError);
    return res.render('men', {
      layout: 'fashion', menFashion, style: 'style', title: 'Men Fashion',
    });
  });
};
