const express = require('express');
const { StatusCodes } = require('http-status-codes');
const { userController } = require('../factory');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post((req, res) => userController.create(req, res));

router.get('/me', authMiddleware, (req, res) => res.status(StatusCodes.OK).json(req.user));

module.exports = router;
