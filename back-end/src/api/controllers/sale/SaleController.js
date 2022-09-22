const { StatusCodes } = require('http-status-codes');
const BaseController = require('../BaseController');
const SaleService = require('../../../services/sale/SaleService');

class SaleController extends BaseController {
  constructor(service = new SaleService()) {
    super(service);
  }

  async update(req, res) {
    // #swagger.tags = ['Sales']
    const request = await this.service.update(req.body);
    return res.status(StatusCodes.OK).json(request);
  }
}

module.exports = SaleController;
