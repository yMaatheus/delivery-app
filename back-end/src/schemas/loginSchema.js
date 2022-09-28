const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({ 'string.email': 'invalid email' }),
  password: Joi.string().required(),
});

module.exports = loginSchema;