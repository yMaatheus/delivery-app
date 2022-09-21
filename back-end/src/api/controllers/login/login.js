const { login } = require('../../../services');
const { controllerWrapper } = require('../../../utils');

const loginController = controllerWrapper(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const token = await login(email, password);
  res.status(200).json({ token });
});

module.exports = loginController;