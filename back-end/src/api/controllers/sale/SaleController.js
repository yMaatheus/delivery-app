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
    const request = await this.service.getOneDetails({ id });
    return res.status(StatusCodes.OK).json(request);
  }

  async getAllByQuery(req, res) {
    const { query } = req;
    console.log(query);
    const request = await this.service.getAllByQuery(query);
    return res.status(StatusCodes.OK).json(request);
  }
}

module.exports = SaleController;
