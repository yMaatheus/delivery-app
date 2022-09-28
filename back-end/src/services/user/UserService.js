const md5 = require('md5');
const { StatusCodes } = require('http-status-codes');
const BaseService = require('../BaseService');
const { User } = require('../../database/models');
const AppError = require('../../providers/AppError');
const { userCreateValidator, loginValidator } = require('./Validator');
const Jwt = require('../../providers/Jwt');

class UserService extends BaseService {
  constructor(model = User) {
    super(model);
  }

  async register(body) {
    return this.create({ ...body, role: 'customer' });
  }
    
  static hashPassword(value) {
    return md5(value);
  }

  async login(email, pass) {
    loginValidator({ email, password: pass });
    
    const hashedPassword = UserService.hashPassword(pass);
    const user = await this.model.findOne({ where: { email, password: hashedPassword } });
    if (!user) throw new AppError('Invalid email or password', StatusCodes.NOT_FOUND);
    
    const payload = user.get();
    delete payload.password;
    const token = Jwt.sign(payload);
    return { ...payload, token };
  }

  async getByRole(role) {
    const users = await this.model.findAll({ where: { role } });
    if (!users) throw new AppError(`${this.model.tableName} does not exist`);
    return users;
  }

  async create(body) {
    userCreateValidator(body);
    const { password } = body;
    const hashedPassword = UserService.hashPassword(password);
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
