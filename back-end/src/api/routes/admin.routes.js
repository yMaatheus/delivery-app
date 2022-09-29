const express = require('express');
const { userController } = require('../factory');

const router = express.Router();

router.route('/users')
  .post((req, res) => userController.create(req, res))
  .get((req, res) => userController.getAll(req, res));

router.delete('/:id', (req, res) => userController.delete(req, res));

module.exports = router;
