const cors = require('cors');
require('express-async-errors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../../swagger_output.json');
const routes = require('./routes/routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(errorHandler);

module.exports = app;
