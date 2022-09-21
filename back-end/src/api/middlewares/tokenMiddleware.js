const validateToken = require('../../services/token/tokenValidator');

const tokenMiddleware = (req, _res, next) => {
  const { authorization } = req.headers;

  const user = validateToken(authorization);

  req.user = user;
  next();
};

module.exports = tokenMiddleware;