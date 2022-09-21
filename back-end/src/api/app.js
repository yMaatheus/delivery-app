const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../../swagger_output.json');
const routes = require('./routes/routes');
const user = require('./routes/user.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(user);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
