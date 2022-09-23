const { expect } = require('chai');
const sinon = require('sinon');
const LoginService = require('../../../services/login/LoginService');
const { User } = require('../../../database/models');
const { userMockWithId, userValidMock } = require('../../mocks/userMock');
const loginSchema = require('../../../schemas/loginSchema');
const Jwt = require('../../../providers/Jwt');
const AppError = require('../../../providers/AppError');
const { StatusCodes } = require('http-status-codes');

describe('Login Service', () => {
  const loginService = new LoginService();

  afterEach(() => sinon.restore())

  describe('Login', () => {
    it('Success', async () => {
      sinon.stub(loginSchema, 'validate').resolves();
      sinon.stub(User, 'findOne').resolves(userMockWithId);
      sinon.stub(Jwt, 'sign').returns('TOKEN_VALIDO');

      const result = await loginService.login(userValidMock.email, userValidMock.password);

      expect(result).to.be.have.property('role');
      expect(result).to.be.have.property('token');
    })

    describe('Failure', () => {
      it('Validate error', async () => {
        sinon.stub(loginSchema, 'validate').returns({ error: true });
        let error;
        try {
          await loginService.login();
        } catch (err) {
          error = err
        }

        expect(error).to.be.instanceOf(AppError);
        expect(error.statusCode).to.be.equal(StatusCodes.BAD_REQUEST);
      })

      it('User not created', async () => {
        sinon.stub(loginSchema, 'validate').returns({ error: false });
        sinon.stub(User, 'findOne').resolves(null);

        let error;
        try {
          await loginService.login('email', 'password');
        } catch (err) {
          error = err
        }

        expect(error).to.be.instanceOf(AppError);
        expect(error.message).to.be.equal('Invalid email or password');
        expect(error.statusCode).to.be.equal(StatusCodes.UNAUTHORIZED);
      })

    })
  })
});