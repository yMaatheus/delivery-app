const Jwt = require('../../providers/Jwt');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  const { data: user } = Jwt.verify(authorization);

  req.user = user;
  next();
};