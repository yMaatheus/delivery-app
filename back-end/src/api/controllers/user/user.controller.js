const BaseController = require("../BaseController");
const UserService = require("../../../services/user/UserService");
const controllerWrapper = require("../../../utils/controllerWrapper");
const { StatusCodes } = require("http-status-codes");



class UserController extends BaseController {
		constructor(service = new UserService()) {
				super(service);
		}

		login = controllerWrapper(async (req, res) => {
			// #swagger.tags = ['Users']
				const payload = await this.service.login(req.body.email, req.body.password);
				return res.status(StatusCodes.OK).json(payload);
		});
}

module.exports = UserController;