const express = require('express');
const {userControler} = require('../../factory');

const loginRoutes = express.Router();

loginRoutes.post('/', userControler.login);

module.exports = loginRoutes;
