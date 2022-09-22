const BaseService = require('../../services/BaseService');
const { User, Product } = require('../../database/models');
const BaseController = require('../controllers/BaseController');
const UserService = require('../../services/user/UserService');
const LoginController = require('../controllers/login/LoginController');
const SaleController = require('../controllers/sale/SaleController');

const loginController = new LoginController();

const userService = new UserService(User);
const userController = new BaseController(userService);

const productService = new BaseService(Product);
const productController = new BaseController(productService);

const saleController = new SaleController();

module.exports = { loginController, userController, productController, saleController };