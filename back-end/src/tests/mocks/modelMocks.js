const entitiesMocks = require("./entitiesMocks")

class ModelMock {
  constructor(mock = entitiesMocks) {
    this.mock = mock
  }

  async create(mock) {
    return {
      get: () => mock,
    }
  }

  async findAll() {
    return this.mock.allEntities
  }

  async findOne(entId) {
    const entity = this.mock.allEntities.find(({ id }) => id === entId)
    return entity;
  }

  async update(_id, body) {
    return body
  }

  async destroy() {
    return null
  }
}

module.exports = new ModelMock();