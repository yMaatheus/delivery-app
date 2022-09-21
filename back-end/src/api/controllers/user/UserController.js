const BaseController = require("../BaseController");
const UserService = require("../../../services/user/UserService");
const controllerWrapper = require("../../../utils/controllerWrapper");


class UserController extends BaseController {
		constructor(service = new UserService()) {
				super(service);
		}

		login = controllerWrapper(async (req, res) => {
				const token = await this.service.login(req.body.email, req.body.password);
				return res.status(200).json({ token });
		});
}

module.exports = UserController;