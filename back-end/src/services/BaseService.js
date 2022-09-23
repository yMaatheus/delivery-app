const AppError = require('../providers/AppError');

class BaseService {
  constructor(model) {
    this.model = model;
  }

  async create(body) {
    const created = await this.model.create(body);
    return created.get();
  }

  async getAll() {
    const entity = await this.model.findAll();
    return entity;
  }

  async getOne(where) {
    const entity = await this.model.findOne(where);
    if (!entity) throw new AppError(`${this.model.tableName} does not exist`);
    return entity;
  }

  async update(id, body) {
    const entity = await this.model.update(body, { where: { id } });
    if (!entity) throw new AppError(`${this.model.tableName} does not exist`);
    return entity;
  }

  async delete(id) {
    const entity = await this.model.findOne({ where: { id } });
    if (!entity) throw new AppError(`${this.model.tableName} does not exist`);
    entity.destroy();
    return ({ ...entity.dataValues, status: 'Deleted Sucessfully' });
  }
}

module.exports = BaseService;