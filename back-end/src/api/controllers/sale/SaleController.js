const { StatusCodes } = require('http-status-codes');
const BaseController = require('../BaseController');
const SaleService = require('../../../services/sale/SaleService');

class SaleController extends BaseController {
  constructor(service = new SaleService()) {
    super(service);
  }

  async update(req, res) {
    const request = await this.service.update(req.body);
    return res.status(StatusCodes.OK).json(request);
  }

  async getOneDetails(req, res) {
    const { id } = req.params;
    const request = await this.service.getOne({ id });
    return res.status(StatusCodes.OK).json(request);
  }
}

module.exports = SaleController;
