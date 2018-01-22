const viewWomenFa = require('../models/queries/viewWomenFashion');

exports.get = (req, res) => {
  viewWomenFa((dataBaseConnectionError, womenFashion) => {
    if (dataBaseConnectionError) return res.status(500).send({ error: dataBaseConnectionError });
    return res.render('women', {
      layout: 'fashion', womenFashion, style: 'style', title: 'Women Fashion',
    });
  });
};
