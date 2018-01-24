const viewFa = require('../models/queries/viewMenFashion');
const jwt = require('jsonwebtoken');

exports.get = (req, res, next) => {
  viewFa.viewAllFashion((error, Fashion) => {
    if (error) {
      return next(error);
    }
    const { accessToken } = req.cookies;
    if (accessToken) {
      const verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
      if (verifyCookie) {
        const data = jwt.decode(accessToken);
        viewFa.viewSavedMenFashion(data.id, (err, result) => {
          Fashion.forEach((clothe) => {
            result.forEach((savedclothe) => {
              if (clothe.id === savedclothe.id) {
                clothe.saved = true;
              }
            });
          });
          return res.render('shop', {
            layout: 'fashion',
            Fashion,
            style: 'style',
            title: 'Fashion',
            login: true,
          });
        });
      }
    } else {
      return res.render('shop', {
        layout: 'fashion',
        Fashion,
        style: 'style',
        title: 'Fashion',
        login: false,
      });
    }
    return null;
  });
};
