const express = require('express');
const {userController} = require('../../factory');

const router = express.Router();

router.route('/')
  .post(userController.create);

module.exports = router;
