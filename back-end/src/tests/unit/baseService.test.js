const sinon = require("sinon");
const chai = require("chai");
const BaseService = require("../../services/BaseService");
const ModelMocks = require("../mocks/modelMocks");
const entitiesMocks = require("../mocks/entitiesMocks");
const { expect } = chai;

describe("Tests the BaseService", () => {
  const baseService = new BaseService(ModelMocks)
 
  before(async () => {
    
  });

  after(() => {
    sinon.restore();
  });

  describe("When creating", () => {
    it("sucessfully adds a entity", async () => {
      const entity = await baseService.create(entitiesMocks.allEntities[0]);
      expect(entity).to.be.deep.equal(entitiesMocks.allEntities[0]);
    });
  });
});