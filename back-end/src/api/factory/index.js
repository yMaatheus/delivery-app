const BaseService = require('../../services/BaseService');
const { Product } = require('../../database/models');
const BaseController = require('../controllers/BaseController');
const SaleController = require('../controllers/sale/SaleController');
const UserController = require('../controllers/user/UserController');

const userController = new UserController();

const productService = new BaseService(Product);
const productController = new BaseController(productService);

const saleController = new SaleController();

module.exports = { userController, productController, saleController };