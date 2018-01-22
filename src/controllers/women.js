const viewWomenFa = require('../models/queries/viewWomenFashion');
const viewMenFa = require('../models/queries/viewMenFashion');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  viewWomenFa((dataBaseConnectionError, womenFashion) => {
    if (dataBaseConnectionError) {
      return res.status(500).send({
        error: dataBaseConnectionError,
      });
    }
    const { accessToken } = req.cookies;
    if (accessToken) {
      const verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
      if (verifyCookie) {
        const data = jwt.decode(accessToken);
        viewMenFa.viewSavedMenFashion(data.id, (err, result) => {
          womenFashion.forEach((womenclothe) => {
            result.forEach((savedclothe) => {
              if (womenclothe.id === savedclothe.id) {
                womenclothe.saved = true;
              }
            });
          });
          return res.render('women', {
            layout: 'fashion',
            womenFashion,
            style: 'style',
            title: 'Women Fashion',
          });
        });
      }
    }
  });
};
