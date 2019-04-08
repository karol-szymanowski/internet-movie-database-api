'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./api/controller');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT);

module.exports = app;
