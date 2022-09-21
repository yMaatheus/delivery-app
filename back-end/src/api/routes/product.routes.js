const express = require('express');
const { productController } = require('../../factory');

const router = express.Router();

router.route('/')
  .get((req, res) => productController.getAll(req, res));

module.exports = router;
