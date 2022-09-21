const controllerWrapper = require("../../utils/controllerWrapper");

class BaseController {
    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
    }

    create = controllerWrapper(async (req, res) => {
        const request = await this.service.create(req.body);
        return res.status(200).json(request)
    });

    getAll = controllerWrapper(async (_req, res) => {
        const request = await this.service.getAll();
        return res.status(200).json(request);
    });

    getOne = controllerWrapper(async (req, res) => {
        const request = await this.service.getOne(req.params.id);
        return res.status(200).json(request);
    });

    update = controllerWrapper(async (req, res) => {
        const request = await this.service.update(req.params.id, req.body);
        return res.status(200).json(request);
    });

    delete = controllerWrapper(async (req, res) => {
        const request = await this.service.delete(req.params.id);
        return res.status(200).json(request);
    });
}

module.exports = BaseController;