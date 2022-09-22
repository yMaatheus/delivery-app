const md5 = require('md5');
const { StatusCodes } = require('http-status-codes');
const BaseService = require('../BaseService');
const { User } = require('../../database/models');
const AppError = require('../../providers/AppError');
const userCreateValidator = require('./Validator');
const Jwt = require('../../providers/Jwt');

class UserService extends BaseService {
  constructor(model = User) {
    super(model);
  }

  async create(body) {
    userCreateValidator(body);
    const { password } = body;
    const hashedPassword = md5(password);
    const [user, created] = await this.model.findOrCreate({
      where: { email: body.email },
      defaults: { ...body, password: hashedPassword },
    });
    if (!created) throw new AppError('User allready exists', StatusCodes.CONFLICT);
    const payload = user.get();
    delete payload.password;

    const token = Jwt.sign(payload);
    return ({ ...payload, token });
  }
}

module.exports = UserService;