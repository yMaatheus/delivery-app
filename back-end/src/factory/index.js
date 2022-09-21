const BaseService = require('../services/BaseService');
const { User, Product } = require('../database/models');
const BaseController = require('../api/controllers/BaseController');
const UserService = require('../services/user/UserService');
const LoginController = require('../api/controllers/login/login.controller');

const loginController = new LoginController();

const userService = new UserService(User);
const userController = new BaseController(userService);

const productService = new BaseService(Product);
const productController = new BaseController(productService);

module.exports = { loginController, userController, productController };