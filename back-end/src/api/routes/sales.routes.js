const express = require('express');
const { saleController } = require('../factory');

const router = express.Router();

router.route('/')
  .post((req, res) => saleController.create(req, res))
  .put((req, res) => saleController.update(req, res));

router.route('/:id')
  .get((req, res) => saleController.getOne(req, res));

module.exports = router;
