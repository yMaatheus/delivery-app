const { expect } = require("chai");
const sinon = require("sinon");
const { StatusCodes } = require("http-status-codes");
const SaleController = require("../../../api/controllers/sale/SaleController");
const { SaleProduct } = require('../../../database/models');
const SaleService = require("../../../services/sale/SaleService");
const { saleDetailsMock } = require("../../mocks/saleMock");

describe('Sale Controller', () => {
  const saleController = new SaleController();

  const req = {};
  const res = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  afterEach(() => sinon.restore())

  describe('Update', () => {
    it('Success', async () => {
      sinon.stub(SaleProduct, 'update').resolves({});
      req.body = { saleId: 1, productId: 1 };
      await saleController.update(req, res);

      expect((res.status).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json).calledWith({ saleId: 1, productId: 1 })).to.be.true;
    })
  })

  describe('getOne', () => {
    it('Success', async () => {
      sinon.stub(SaleService, 'getSaleDetails').resolves(saleDetailsMock);
      req.params = { id: 1 };
      await saleController.update(req, res);

      expect((res.status).calledWith(StatusCodes.OK)).to.be.true;
    })
  })
});