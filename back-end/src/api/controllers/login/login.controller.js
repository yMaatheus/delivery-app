const { StatusCodes } = require('http-status-codes');
const BaseController = require('../BaseController');
const UserService = require('../../../services/user/UserService');

class LoginController extends BaseController {
  constructor(service = new UserService()) {
    super(service);
  }

  async login(req, res) {
    // #swagger.tags = ['Users']
    const payload = await this.service.login(req.body.email, req.body.password);
    return res.status(StatusCodes.OK).json(payload);
    }
}

module.exports = LoginController;