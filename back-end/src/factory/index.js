const BaseService = require('../services/BaseService');
const { User } = require('../database/models');
const BaseController = require('../api/controllers/BaseController');
const UserService = require('../services/user/UserService');
const UserController = require('../api/controllers/user/UserController');


const userControler = new UserController();

module.exports = { userControler };