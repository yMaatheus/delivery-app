const { StatusCodes } = require('http-status-codes');
const AppError = require('../../providers/AppError');
const Jwt = require('../../providers/Jwt');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  const user = Jwt.verify(authorization);
  if (user.role !== 'administrator') {
    throw new AppError('Only admin can use this route', StatusCodes.UNAUTHORIZED);
  }

  req.user = user;
  next();
};