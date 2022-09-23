const { StatusCodes } = require('http-status-codes');
const AppError = require('../../providers/AppError');
const userSchema = require('../../schemas/userSchema');
const loginSchema = require('../../schemas/loginSchema');

const loginValidator = (login) => {
  const { error } = loginSchema.validate(login);
  if (error) {
    throw new AppError(error.message, StatusCodes.BAD_REQUEST);
  }
};

const userCreateValidator = (user, role) => {
  const { error } = userSchema.validate(user);
  if (error) {
    throw new AppError(error.message, StatusCodes.BAD_REQUEST);
  }
  if (role !== 'admin' && user.role !== 'costummer') {
    throw new AppError('Only admins can register new admins', StatusCodes.UNAUTHORIZED);
  }
};

module.exports = { userCreateValidator, loginValidator };
