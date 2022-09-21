const express = require('express');
const loginRoutes = require('./login.routes');
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const imagesRoutes = require('./images.routes');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/users', userRoutes);
routes.use('/images', imagesRoutes);
routes.use('/products', tokenMiddleware, productRoutes);

module.exports = routes;
