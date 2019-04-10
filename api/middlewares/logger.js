'use strict';

const logger = require('../helpers/logger');

module.exports = (req, res, next) => {
  logger.info(`HTTP ${req.method} - ${req.url}`);
  next();
};
