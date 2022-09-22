const { StatusCodes } = require('http-status-codes');

class BaseController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    const request = await this.service.create(req.body);
    return res.status(StatusCodes.CREATED).json(request);
  }

  async getAll(_req, res) {
    const request = await this.service.getAll();
    return res.status(StatusCodes.OK).json(request);
  }

  async getOne(req, res) {
    const request = await this.service.getOne(req.params.id);
    return res.status(StatusCodes.OK).json(request);
  }

  async update(req, res) {
    const request = await this.service.update(req.params.id, req.body);
    return res.status(StatusCodes.OK).json(request);
  }

  async delete(req, res) {
    const request = await this.service.delete(req.params.id);
    return res.status(StatusCodes.OK).json(request);
  }
}

module.exports = BaseController;