const express = require('express');
const { loginController } = require('../../factory');

const router = express.Router();

router.route('/')
  .post((req, res) => loginController.login(req, res));

module.exports = router;
