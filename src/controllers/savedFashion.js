const save = require('../models/queries/savedFashion');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const { accessToken } = req.cookies;
  if (accessToken) {
    const verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      const data = jwt.decode(accessToken);
      save.savedFashion(data.id, (dataBaseConnectionError, savedfashion) => {
        if (dataBaseConnectionError) {
          return res.status(500).send({
            error: dataBaseConnectionError,
          });
        }

        return res.render('saved', {
          layout: 'fashion',
          savedfashion,
          style: 'style',
          title: 'saved fashion',
        });
      });
    }
  } else {
    res.render('login', {
      style: 'login',
    });
  }
};

exports.post = (req, res) => {
  const reqbody = req.body;
  const { accessToken } = req.cookies;
  if (accessToken) {
    const verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      const data = jwt.decode(accessToken);
      save.saved(
        data.id,
        reqbody.clothId,
        (dataBaseConnectionError, result) => {
          if (dataBaseConnectionError) {
            return res.status(500).send(dataBaseConnectionError);
          }
          return res.send(result);
        },
      );
    }
  } else {
    res.status(401).send();
  }
};
