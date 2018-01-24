const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const cookie = req.cookies.accessToken;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      res.render('home', {
        style: 'home',
        title: 'Elegant',
        layout: 'home',
        login: true,
      });
    } else {
      res.render('home', {
        style: 'home',
        title: 'Elegant',
        layout: 'home',
        login: false,
      });
    }
  } else {
    res.render('home', {
      style: 'home',
      title: 'Elegant',
      layout: 'home',
      login: false,
    });
  }
};
