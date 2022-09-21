const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../utils/customError');
const userSchema = require('../../schemas/userSchema');

const userCreateValidator = (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    throw new CustomError(error.message, StatusCodes.BAD_REQUEST);
  }
};

module.exports = userCreateValidator;
