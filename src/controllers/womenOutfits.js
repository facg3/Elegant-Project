const viewWomenOutfits = require('../models/queries/viewWomenOutfits');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const cookie = req.cookies.accessToken;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      viewWomenOutfits((dataBaseConnectionError, womenOutfits) => {
        if (dataBaseConnectionError) { return res.status(500).send({ error: dataBaseConnectionError }); }
        return res.render('womenOutfits', {
          layout: 'fashion',
          womenOutfits,
          style: 'style',
          title: 'Women Outfits',
          login: true,
        });
      });
    } else {
      viewWomenOutfits((dataBaseConnectionError, womenOutfits) => {
        if (dataBaseConnectionError) { return res.status(500).send({ error: dataBaseConnectionError }); }
        return res.render('womenOutfits', {
          layout: 'fashion',
          womenOutfits,
          style: 'style',
          title: 'Women Outfits',
          login: false,
        });
      });
    }
  } else {
    viewWomenOutfits((dataBaseConnectionError, womenOutfits) => {
      if (dataBaseConnectionError) { return res.status(500).send({ error: dataBaseConnectionError }); }
      return res.render('womenOutfits', {
        layout: 'fashion',
        womenOutfits,
        style: 'style',
        title: 'Women Outfits',
        login: false,
      });
    });
  }
};
