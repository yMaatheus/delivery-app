const express = require('express');
const { userController } = require('../factory');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

router.route('/users')
  .post((req, res) => userController.create(req, res));

router.delete('/:id', adminMiddleware, (req, res) => userController.delete(req, res));

module.exports = router;
