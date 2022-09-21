const { StatusCodes } = require("http-status-codes");
const controllerWrapper = require("../../utils/controllerWrapper");

class BaseController {
    constructor(service) {
        this.service = service;
    }

    create = controllerWrapper(async (req, res) => {
        const request = await this.service.create(req.body);
        return res.status(StatusCodes.CREATED).json(request)
    });

    getAll = controllerWrapper(async (_req, res) => {
        const request = await this.service.getAll();
        return res.status(StatusCodes.OK).json(request);
    });

    getOne = controllerWrapper(async (req, res) => {
        const request = await this.service.getOne(req.params.id);
        return res.status(StatusCodes.OK).json(request);
    });

    update = controllerWrapper(async (req, res) => {
        const request = await this.service.update(req.params.id, req.body);
        return res.status(StatusCodes.OK).json(request);
    });

    delete = controllerWrapper(async (req, res) => {
        const request = await this.service.delete(req.params.id);
        return res.status(StatusCodes.OK).json(request);
    });
}

module.exports = BaseController;