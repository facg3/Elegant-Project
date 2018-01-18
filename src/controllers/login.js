const queries = require('../models/queries/login');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const cookie = req.cookies.accessToken;
  if (cookie) {
    const verifyCookie = jwt.verify(cookie, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      res.render('home', {
        activePage: { login: true },
      });
    }
  } else {
    res.render('login', {
      activePage: {
        login: true,
      },
    });
  }
};

exports.post = (req, res) => {
  const dataUser = req.body;
  console.log(dataUser);
  queries.login(dataUser, (err, result, data) => {
    if (err) {
      res.status(401).send();
    } else if (result) {
      const userData = {
        id: data[0].id,
        username: data[0].username,
      };
      const token = jwt.sign(userData, process.env.SECRET_COOKIE);
      res.cookie('accessToken', token);
      res.end();
    } else {
      res.status(401).send();
    }
  });
};
