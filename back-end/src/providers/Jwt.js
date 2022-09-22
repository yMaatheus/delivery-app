const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const CustomError = require('./AppError');

const { JWT_SECRET } = process.env;

class Jwt {
  constructor(provider, secret) {
    this.provider = provider;
    this.secret = secret;
    this.options = {
      expiresIn: '15d',
      algorithm: 'HS256',
    };
  }

  sign(payload) {
    return this.provider.sign(payload, this.secret, this.options);
  }

  verify(token) {
    if (!token) throw new CustomError('Token not found', StatusCodes.UNAUTHORIZED);
    try {
      return this.provider.verify(token, this.secret, this.options);
    } catch (_err) {
      throw new CustomError('Expired or invalid token', StatusCodes.UNAUTHORIZED);
    }
  }
}

module.exports = new Jwt(jwt, JWT_SECRET);