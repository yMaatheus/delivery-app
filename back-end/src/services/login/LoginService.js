const md5 = require('md5');
const { StatusCodes } = require('http-status-codes');
const BaseService = require('../BaseService');
const Jwt = require('../../providers/Jwt');
const { User } = require('../../database/models');
const AppError = require('../../providers/AppError');
const loginValidator = require('./Validator');

class LoginService extends BaseService {
  constructor(model = User) {
    super(model);
  }

  async login(email, pass) {
    loginValidator({ email, password: pass });
    
    const hashedPassword = md5(pass);
    const user = await this.model.findOne({ where: { email, password: hashedPassword } });
    if (!user) throw new AppError('Invalid email or password', StatusCodes.UNAUTHORIZED);
    
    const payload = user.get();
    delete payload.password;
    const token = Jwt.sign(payload);
    return { role: payload.role, token };
  }
}

module.exports = LoginService;