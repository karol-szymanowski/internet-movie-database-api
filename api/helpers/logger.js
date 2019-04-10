'use strict';

const winston = require('winston');
const config = require('../../config');

const transports = [
  new winston.transports.Console(),
];

if (config.logSave) {
  transports.push(new winston.transports.File({ filename: config.logFile || 'combined.log' }));
}

const format = winston.format.printf(({
  level,
  message,
  timestamp,
}) => `${timestamp} [${level}]: ${message}`);

module.exports = winston.createLogger({
  level: config.logLevel || 'info',
  format: winston.format.combine(winston.format.timestamp(), format),
  transports,
});
