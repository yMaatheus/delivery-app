const { expect } = require("chai");
const sinon = require("sinon");
const { StatusCodes } = require("http-status-codes");
const LoginService = require('../../../services/login/LoginService');
const LoginController = require("../../../api/controllers/login/LoginController");
const loginSchema = require("../../../schemas/loginSchema");
const { userMock, userValidMock, userMockWithId } = require('../../mocks/userMock');
const { User } = require('../../../database/models');
const Jwt = require("../../../providers/Jwt");

describe('Login Controller', () => {
  const loginService = new LoginService();
  const loginController = new LoginController();
  
  const req = {};
  const res = {};

  beforeEach(() => {
    sinon.stub(loginService, 'login').resolves(userMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  afterEach(() => sinon.restore())

  describe('Login', () => {
    it('Success', async () => {
      sinon.stub(loginSchema, 'validate').resolves();
      sinon.stub(User, 'findOne').resolves(userMockWithId);
      sinon.stub(Jwt, 'sign').returns('TOKEN_VALIDO');
      req.body = { email: userValidMock.email, password: userValidMock.password };
      await loginController.login(req, res);

      expect((res.status).calledWith(StatusCodes.OK)).to.be.true;
      expect((res.json).calledWith({ role: 'administrator', token: 'TOKEN_VALIDO' })).to.be.true;
    })
  })
});