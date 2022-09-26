const express = require('express');
const loginRoutes = require('./login.routes');
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const imagesRoutes = require('./images.routes');
const salesRoutes = require('./sales.routes');
const adminRoutes = require('./admin.routes');
const authMiddleware = require('../middlewares/authMiddleware');

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/users', userRoutes);
routes.use('/images', imagesRoutes);
routes.use('/products', authMiddleware, productRoutes);
routes.use('/sales', authMiddleware, salesRoutes);
routes.use('/admin', authMiddleware, adminRoutes);

module.exports = routes;
