const express = require('express');

const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

const tasks = require('./tasks');

app.use(tasks);
// #swagger.tags = ['Tasks']);

const Authentification = require('./Authentifizierung');

app.use('/', Authentification);
// #swagger.tags = ['Verification']);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Tasks app listening on port ${port}`);
});
