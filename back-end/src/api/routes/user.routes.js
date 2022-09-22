const express = require('express');
const { userController } = require('../factory');

const router = express.Router();

router.route('/')
  .post((req, res) => userController.create(req, res));

module.exports = router;
