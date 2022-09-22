const entitiesMocks = require("./entitiesMocks")

class ModelMock {
  constructor(mock = entitiesMocks) {
    this.mock = mock
    this.tableName = 'entities'
  }

  async create(mock) {
    return {
      get: () => mock,
    }
  }

  async findAll() {
    return this.mock.allEntities
  }

  async findOne(ent) {
    let entId = ent;
    if (ent.where) entId = ent.where.id;

    const entity = this.mock.allEntities.find(({ id }) => id === entId)
    if (!entity) return null
    
    return entity;
  }

  async update({ anyKey }, { where: { id: entId } }) {
    const entity = this.mock.allEntities.find(({ id }) => id === entId)

    if (!entity) return null 
    
    return { ...entity, anyKey }
  }
}

module.exports = new ModelMock();
