const queries = require('../models/queries/signup.js');

exports.get = (req, res) => {
  res.render('signup', { layout: false });
};
exports.post = (req, response) => {
  if (!req.body.address) {
    queries.signup(req.body, (errRegister, result) => {
      if (errRegister) {
        response.status(401).send();
      } else {
        console.log(result);
        response.redirect('/');
      }
    });
  } else {
    queries.signupOnwer(req.body, (err, result) => {
      if (err) {
        response.status(401).send({ error: err });
      } else {
        response.redirect('/');
      }
    });
  }
};
