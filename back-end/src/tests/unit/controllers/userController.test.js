const { expect } = require("chai");
const sinon = require("sinon");
const { StatusCodes } = require("http-status-codes");
const UserService = require('../../../services/user/UserService');
const UserController = require("../../../api/controllers/user/UserController");
const { userValidMock, userMockWithId } = require('../../mocks/userMock');
const { User } = require('../../../database/models');
const Jwt = require("../../../providers/Jwt");
const loginSchema = require("../../../schemas/loginSchema");

describe('Login Controller', () => {
  const userController = new UserController();
  
  const req = {};
  const res = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  afterEach(() => sinon.restore())

  describe('Login', () => {
    it('Success', async () => {
      sinon.stub(loginSchema, 'validate').resolves();
      sinon.stub(UserService, 'hashPassword').returns('fakePassword');
      sinon.stub(User, 'findOne').resolves(userMockWithId);
      sinon.stub(Jwt, 'sign').returns('TOKEN_VALIDO');
      req.body = { email: userValidMock.email, password: userValidMock.password };
      await userController.login(req, res);

      expect((res.status).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json).calledWith({ role: 'administrator', token: 'TOKEN_VALIDO' })).to.be.true;
    })
  })
});