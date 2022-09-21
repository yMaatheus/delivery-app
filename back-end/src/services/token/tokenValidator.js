require('dotenv/config');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../utils/customError');

// VERIFICAR SE É POSSÍVLE USAR JWT SECRET NO DOTENV
const validateToken = (token) => {
  if (!token) throw new CustomError('Token not found', StatusCodes.UNAUTHORIZED);
  try {
  const { data } = jwt.verify(token, process.env.JWT_SECRET);
  return data;
  } catch (_err) {
  const e = new CustomError('Expired or invalid token', StatusCodes.UNAUTHORIZED);
  throw e;
}
};

module.exports = validateToken;