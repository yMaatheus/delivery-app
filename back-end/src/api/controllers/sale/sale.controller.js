const { StatusCodes } = require('http-status-codes');
const BaseController = require('../BaseController');
const SaleService = require('../../../services/sale/SaleService');

class SaleController extends BaseController {
  constructor(service = new SaleService()) {
    super(service);
  }

  async queryUpdate(req, res) {
    const { saleId: s, productId: p } = req.query;
    const query = { saleId: Number(s), productId: Number(p) };
    console.log(query);
    const request = await this.service.queryUpdate(req.body, query);
    return res.status(StatusCodes.OK).json(request);
  }
}

module.exports = SaleController;