const express = require('express');
const { saleController } = require('../factory');

const router = express.Router();

router.route('/')
  .post((req, res) => saleController.create(req, res))
  .put((req, res) => saleController.update(req, res));

router.route('/find')
  .get((req, res) => saleController.getAll(req, res));

router.route('/details/:id')
  .get((req, res) => saleController.getOneDetails(req, res));

module.exports = router;
