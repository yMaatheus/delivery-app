const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../utils/customError');
const loginSchema = require('../../schemas/loginSchema');

const loginValidator = (login) => {
  const { error } = loginSchema.validate(login);
  if (error) {
    throw new CustomError(error.message, StatusCodes.BAD_REQUEST);
  }
};

module.exports = loginValidator;
