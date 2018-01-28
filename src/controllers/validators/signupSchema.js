const Joi = require('joi');

module.exports = {
  username : Joi.string().alphanum().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email().required(),
  checked : Joi.boolean(),
  shopname : Joi.string().when('checked',{is:true , then: Joi.string().required()}),
  address : Joi.string().required().when('checked',{is:true , then: Joi.string().required()})
}
