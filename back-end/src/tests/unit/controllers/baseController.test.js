const chai = require("chai");
const sinon = require("sinon");
const BaseService = require("../../../services/BaseService");
const ModelMocks = require("../../mocks/modelMocks");
const entitiesMocks = require("../../mocks/entitiesMocks");
const BaseController = require("../../../api/controllers/BaseController");
const { StatusCodes } = require("http-status-codes");
const { expect } = chai;

describe("Tests the BaseController", () => {
  const { allEntities, entity, entityWithId } = entitiesMocks;
  const baseService = new BaseService(ModelMocks);
  const baseController = new BaseController(baseService);
  const req = {}; 
  const res = {};

  // before(async () => {
  //   sinon.stub(baseService, 'create').resolves(entityWithId);
  //   sinon.stub(baseService, 'getAll').resolves(null);
  //   sinon.stub(baseService, 'getOne').resolves(null);
  //   sinon.stub(baseService, 'update').resolves();
  //   sinon.stub(baseService, 'delete').resolves();

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns(res);
  // });

  // after(()=>{
  //   sinon.restore();
  // })

  describe("When creating", () => {
    beforeEach(async () => {
      sinon.stub(baseService, 'create').resolves(entityWithId);
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    afterEach(()=>{
      sinon.restore();
    })
  
    it("sucessfully adds a entity", async () => {
      req.body = entity;
      await baseController.create(req, res);

      expect(res.status.calledWith(StatusCodes.CREATED)).to.be.true;
      expect(res.json.calledWith(entityWithId)).to.be.true;        
    });
  });

  describe("When reading", () => {
    beforeEach(async () => {
      sinon.stub(baseService, 'getAll').resolves(allEntities);
      sinon.stub(baseService, 'getOne').resolves(entityWithId);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    afterEach(()=>{
      sinon.restore();
    })

    it("returns a list of entities", async () => {
      await baseController.getAll(req, res);

      expect(res.status.calledWith(StatusCodes.OK)).to.be.true;
      expect(res.json.calledWith(allEntities)).to.be.true;        
    });

    it("returns a entity by its id, when it exists", async () => {
      req.params = { id: 2 }
      await baseController.getOne(req,res);

      expect(res.status.calledWith(StatusCodes.OK)).to.be.true;
      expect(res.json.calledWith(entityWithId)).to.be.true;        
    });
  });

  describe("When updating", () => {
    beforeEach(async () => {
      const entityUpdate = { ...entityWithId, anyKey: "other-value" }
      sinon.stub(baseService, 'update').resolves(entityUpdate);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    afterEach(()=>{
      sinon.restore();
    })

    it("sucessfully updates a entity's info", async () => {
      const entityUpdate = { ...entityWithId, anyKey: "other-value" };
      req.body = { anyKey: "other-value" }
      req.params = { id: 1 }

      await baseController.update(req, res);

      expect(res.status.calledWith(StatusCodes.OK)).to.be.true;
      expect(res.json.calledWith(entityUpdate)).to.be.true;        
    });
  });

  describe("When deleting", () => {
    const delReturn = { ...entityWithId, status: 'Deleted Sucessfully' }
    
    beforeEach(async () => {
      sinon.stub(baseService, 'delete').resolves(delReturn);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    afterEach(()=>{
      sinon.restore();
    })

    it("sucessfuly deletes a entity", async () => {
      req.params = { id: 1 }
      await baseController.delete(req, res);

      expect(res.status.calledWith(StatusCodes.OK)).to.be.true;
      expect(res.json.calledWith(delRetur)).to.be.true;      
    });
  });
});
