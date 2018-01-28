const Joi = require('joi');
module.exports = schema => (req, res, next) => {
  const { body } = req;
  console.log(body);
  const validateStatus = Joi.validate(body, schema);
  console.log(validateStatus.error);
  if (validateStatus.error) {
    res.status(401).render('form', { err: validateStatus.error.details[0].message });
  } else next();
};
