const save = require('../models/queries/savedFashion');
const jwt = require('jsonwebtoken');

exports.post = (req, res) => {
  const reqbody = req.body;
  const { accessToken } = req.cookies;
  if (accessToken) {
    const verifyCookie = jwt.verify(accessToken, process.env.SECRET_COOKIE);
    if (verifyCookie) {
      const data = jwt.decode(accessToken);
      save.unsaved(
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
