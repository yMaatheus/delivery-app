const { login } = require('../../../services');
const { controllerWrapper } = require('../../../utils');

const loginController = controllerWrapper(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const payLoad = await login(email, password);
  res.status(200).json(payLoad);
});

module.exports = loginController;