const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const cookie = req.cookies.accessToken;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      res.render('aboutus', {
        login: true,
      });
    } else {
      res.render('aboutus', {
        login: false,
      });
    }
  } else {
    res.render('aboutus', {
      login: false,
    });
  }
};
