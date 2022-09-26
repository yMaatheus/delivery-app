const { expect } = require('chai');
const sinon = require('sinon');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../../../providers/AppError');
const SaleService = require('../../../services/sale/SaleService');
const saleSchema = require('../../../schemas/saleSchema');
const { Sale, SaleProduct, Product } = require('../../../database/models');
const { saleMock, saleAndProductMock, productMock, saleDetailsMock } = require('../../mocks/saleMock');
const fs = require('fs').promises;
const Models = require('../../../database/models');

describe('Sale Service', () => {
  const saleService = new SaleService();

  afterEach(() => sinon.restore())

  describe('Create', () => {
    it('Success', async () => {
      sinon.stub(Sale, 'create').resolves(saleMock);
      sinon.stub(SaleProduct, 'bulkCreate').resolves(saleMock);
      sinon.stub(Product, 'findByPk').resolves({ ...productMock, quantity: 5 });
      const result = await saleService.create(saleAndProductMock);

      expect(result).to.be.have.property('status');
      expect(result).to.be.have.property('id');
      expect(result).to.be.have.property('userId');
      expect(result).to.be.have.property('sellerId');
      expect(result).to.be.have.property('totalPrice');
      expect(result).to.be.have.property('deliveryAddress');
      expect(result).to.be.have.property('deliveryNumber');
      expect(result).to.be.have.property('saleDate');
    })

    describe('Failure', () => {
      it('Validate error', async () => {
        sinon.stub(saleSchema, 'validate').returns({ error: true });
        let error;
        try {
          await saleService.create();
        } catch (err) {
          error = err
        }

        expect(error).to.be.instanceOf(AppError);
        expect(error.statusCode).to.be.equal(StatusCodes.BAD_REQUEST);
      })

      it('Total price error', async () => {
        sinon.stub(saleSchema, 'validate').returns({ error: false });
        let error;
        try {
          const body = { ...saleAndProductMock, sale: { ...saleAndProductMock.sale, totalPrice: 0 } };
          await saleService.create(body);
        } catch (err) {
          error = err
        }

        expect(error).to.be.instanceOf(AppError);
        expect(error.statusCode).to.be.equal(StatusCodes.UNPROCESSABLE_ENTITY);
      })
    })
  })

  describe('Update', () => {
    it('Success', async () => {
      sinon.stub(SaleProduct, 'update').resolves({});
      const result = await saleService.update({ saleId: 1, productId: 1 });

      expect(result).to.be.have.property('saleId');
      expect(result).to.be.have.property('productId');
    })

    describe('Failure', () => {
      it('Entity not exists error', async () => {
        sinon.stub(SaleProduct, 'update').resolves(null);
        let error;
        try {
          await saleService.update({ saleId: 1, productId: 1 });
        } catch (err) {
          error = err
        }

        expect(error).to.be.instanceOf(AppError);
        expect(error.statusCode).to.be.equal(StatusCodes.NOT_FOUND);
      })
    })
  })

  describe('getOne', () => {
    it('Success', async () => {
      sinon.stub(SaleService, 'getSaleDetails').resolves(saleDetailsMock);
      const result = await saleService.getOne({ id: 1 });

      expect(result).to.be.have.property('id');
      expect(result.id).to.equal(1);
    })
  })

});