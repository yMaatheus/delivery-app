const { StatusCodes } = require('http-status-codes');
const AppError = require('../../providers/AppError');
const userSchema = require('../../schemas/userSchema');

const userCreateValidator = (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    throw new AppError(error.message, StatusCodes.BAD_REQUEST);
  }
};

module.exports = userCreateValidator;
