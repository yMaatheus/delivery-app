const express = require('express');
const { loginController } = require('../factory');

const router = express.Router();

router.route('/')
  .post((req, res) => loginController.create(req, res));

module.exports = router;
