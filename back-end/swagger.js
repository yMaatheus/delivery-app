const swaggerAutogen = require('swagger-autogen')();

const doc = {
  host: 'localhost:3001',
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/api/app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);