const { StatusCodes } = require('http-status-codes');
const BaseController = require('../BaseController');
const UserService = require('../../../services/user/UserService');

class UserController extends BaseController {
  constructor(service = new UserService()) {
    super(service);
  }

  async register(req, res) {
    const { body } = req;
    const user = await this.service.register(body);
    return res.status(StatusCodes.CREATED).json(user);
  }

  async login(req, res) {
    const payload = await this.service.login(req.body.email, req.body.password);
    return res.status(StatusCodes.OK).json(payload);
  }
}

module.exports = UserController;