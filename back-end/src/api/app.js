const cors = require('cors');
require('express-async-errors');
const express = require('express');
const routes = require('./routes/routes');
const errorHandler = require('./middlewares/errorHandler');

const DOCUMENTATION_URL = 'https://documenter.getpostman.com/view/21401984/2s7ZE1Q7MS';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/doc', (_req, res) => res.redirect(DOCUMENTATION_URL));

app.use(errorHandler);

module.exports = app;
