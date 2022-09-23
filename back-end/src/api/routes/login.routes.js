const express = require('express');
const { userController } = require('../factory');

const router = express.Router();

router.route('/')
  .post((req, res) => userController.login(req, res));

module.exports = router;
