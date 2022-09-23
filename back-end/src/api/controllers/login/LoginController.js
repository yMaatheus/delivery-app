const { StatusCodes } = require('http-status-codes');
const BaseController = require('../BaseController');
const LoginService = require('../../../services/login/LoginService');

class LoginController extends BaseController {
  constructor(service = new LoginService()) {
    super(service);
  }

  async login(req, res) {
    const payload = await this.service.login(req.body.email, req.body.password);
    return res.status(StatusCodes.OK).json(payload);
  }
}

module.exports = LoginController;