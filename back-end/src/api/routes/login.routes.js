const express = require('express');
const {userControler} = require('../../factory');

const router = express.Router();

router.route('/')
  .post(userControler.login);

module.exports = router;
