const express = require('express');
const {userControler} = require('../../factory');

const router = express.Router();

router.route('/')
  .post(userControler.create);

module.exports = router;
