const viewMenOutfits = require('../models/queries/viewMenOutfits');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const cookie = req.cookies.accessToken;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      viewMenOutfits((dataBaseConnectionError, menOutfits) => {
        if (dataBaseConnectionError) {
          return res.status(500).send({ error: dataBaseConnectionError });
        }
        return res.render('menOutfits', {
          layout: 'fashion',
          menOutfits,
          style: 'style',
          title: 'Men Outfits',
          login: true,
        });
      });
    } else {
      viewMenOutfits((dataBaseConnectionError, menOutfits) => {
        if (dataBaseConnectionError) {
          return res.status(500).send({ error: dataBaseConnectionError });
        }
        return res.render('menOutfits', {
          layout: 'fashion',
          menOutfits,
          style: 'style',
          title: 'Men Outfits',
          login: false,
        });
      });
    }
  } else {
    viewMenOutfits((dataBaseConnectionError, menOutfits) => {
      if (dataBaseConnectionError) {
        return res.status(500).send({ error: dataBaseConnectionError });
      }
      return res.render('menOutfits', {
        layout: 'fashion',
        menOutfits,
        style: 'style',
        title: 'Men Outfits',
        login: false,
      });
    });
  }
};
