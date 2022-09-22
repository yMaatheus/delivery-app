const { StatusCodes } = require('http-status-codes');
const AppError = require('../../providers/AppError');
const loginSchema = require('../../schemas/loginSchema');

const loginValidator = (login) => {
  const { error } = loginSchema.validate(login);
  if (error) {
    throw new AppError(error.message, StatusCodes.BAD_REQUEST);
  }
};

module.exports = loginValidator;
