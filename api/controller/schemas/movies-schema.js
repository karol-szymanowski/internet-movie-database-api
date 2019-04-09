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
    body: Joi.object({
      title: Joi
        .string()
        .required(),
    }).unknown(false),
  },
  get: {
    params: {
      title: Joi
        .string()
        .optional(),
    },
  },
};
