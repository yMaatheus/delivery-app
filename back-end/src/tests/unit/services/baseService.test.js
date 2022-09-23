const chai = require("chai");
const sinon = require("sinon");
const BaseService = require("../../../services/BaseService");
const ModelMocks = require("../../mocks/modelMocks");
const entitiesMocks = require("../../mocks/entitiesMocks");
const { expect } = chai;

describe("Tests the BaseService", () => {
  const { allEntities } = entitiesMocks;
  const baseService = new BaseService(ModelMocks);

  describe("When creating", () => {
    it("sucessfully adds a entity", async () => {
      const entitys = await baseService.create(allEntities[0]);
      expect(entitys).to.be.deep.equal(allEntities[0]);
    });
  });

  describe("When reading", () => {
    it("returns a list of entities", async () => {
      const entities = await baseService.getAll();

      expect(entities).to.be.deep.equal(allEntities);
    });

    it("returns a entity by its id, when it exists", async () => {
      const entity = await baseService.getOne(1);

      expect(entity).to.be.deep.equal(allEntities[0]);
    });

    it("should fail when the id is invalid", async () => {
      let error;
      
      try {
        await baseService.getOne(4);
      } catch (err) {
        error = err
      }

      expect(error?.message).to.be.equal("entities does not exist");
    });
  });

  describe("When updating", () => {
    it("sucessfully updates a entity's info", async () => {
      const entityUpdate = { ...allEntities[0], anyKey: "other-value" };

      const entity = await baseService.update(1, { anyKey: "other-value" });

      expect(entity).to.be.deep.equal(entityUpdate);
    });

    it("should fail when the id is invalid", async () => {
      let error;

      try {
        await baseService.update(4, { anyKey: "other-value" });
      } catch (err) {
        error = err;
      }

      expect(error?.message).to.be.equal("entities does not exist");
    });
  });

  describe("When deleting", () => {
    it("sucessfuly deletes a entity", async () => {
      const entReturn = {
        destroy: () => null,
        dataValues: { ...allEntities[0] },
      };

      sinon.stub(ModelMocks, "findOne").resolves(entReturn);

      const entity = await baseService.delete(1);

      expect(entity).to.be.deep.equal({
        ...entReturn.dataValues,
        status: "Deleted Sucessfully",
      });

      sinon.restore();
    });

    it("should fail when the id is invalid", async () => {
      let error;
      
      try {
        await baseService.delete(4);
      } catch (err) {
        error = err;
      }

      expect(error?.message).to.be.equal("entities does not exist");
    });
  });
});
