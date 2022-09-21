const md5 = require('md5');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../utils/customError');
const { User } = require('../../database/models');
const { tokenGenerator } = require('../token');

const login = async (email, pass) => {
  const hashedPassword = md5(pass);
  const user = await User.findOne({ where: { email, password: hashedPassword } });
  if (!user) {
    throw new CustomError('Invalid email or password', StatusCodes.UNAUTHORIZED);
  }
  const { dataValues: { password, ...rest } } = user;
  const token = tokenGenerator(rest);
  return { role: rest.role, token };
};

module.exports = login;