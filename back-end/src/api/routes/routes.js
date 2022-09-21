const express = require('express');
const loginRoutes = require('./login.routes');

const routes = express.Router();

routes.use('/login', loginRoutes);

module.exports = routes;
