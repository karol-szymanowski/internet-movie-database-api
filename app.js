'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./api/controller');
const logger = require('./api/helpers/logger');
const loggerMiddleware = require('./api/middlewares/logger');

const PORT = process.env.PORT || 5000;

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  logger.info(`App is running on port ${PORT}`);
});

module.exports = app;
