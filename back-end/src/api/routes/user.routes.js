const express = require('express');
const {userControler} = require('../../factory');

const userRoutes = express.Router();

userRoutes.post('/register', userControler.create);

module.exports = userRoutes;
