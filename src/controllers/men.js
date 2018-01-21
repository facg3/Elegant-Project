const viewMenFa = require('../models/queries/viewMenFashion');

exports.get = (req, res) => {
  viewMenFa((dataBaseConnectionError, menFashion) => {
    if (dataBaseConnectionError) return res.status(500).send({ error: dataBaseConnectionError });
    return res.render('men', {
      layout: 'fashion', menFashion, style: 'style', title: 'Men Fashion',
    });
  });
};
