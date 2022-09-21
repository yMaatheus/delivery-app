// const BaseService = require('../services/BaseService');
const { User } = require('../database/models');
const BaseController = require('../api/controllers/BaseController');
const UserService = require('../services/user/UserService');
const LoginController = require('../api/controllers/login/login.controller');

const loginController = new LoginController();

const userService = new UserService(User);
const userController = new BaseController(userService);

module.exports = { loginController, userController };