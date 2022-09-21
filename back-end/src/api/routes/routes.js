const express = require('express');
const loginRoutes = require('./login.routes');
const userRoutes = require('./user.routes');

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/users', userRoutes);

module.exports = routes;
