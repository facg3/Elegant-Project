const viewMenFa = require('../models/queries/viewMenFashion');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  viewMenFa.viewMenFashion((dataBaseConnectionError, menFashion) => {
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
          menFashion.forEach((menclothe) => {
            result.forEach((savedclothe) => {
              if (menclothe.id === savedclothe.id) {
                menclothe.saved = true;
              }
            });
          });
          return res.render('men', {
            layout: 'fashion',
            menFashion,
            style: 'style',
            title: 'Men Fashion',
          });
        });
      }
    }
  });
};
