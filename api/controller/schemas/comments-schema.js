'use strict';

const Joi = require('joi');

module.exports = {
  post: {
    headers: {
      'Content-Type': Joi
        .string()
        .valid('application/json')
        .required(),
    },
    body: {
      ID: Joi
        .number()
        .required(),
      comment: Joi
        .string()
        .required(),
    },
  },
  get: {
    params: {
      id: Joi
        .number()
        .optional(),
    },
  },
};
