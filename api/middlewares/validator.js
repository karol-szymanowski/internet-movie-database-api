'use strict';

const Joi = require('joi');

module.exports = function validate(schema) {
  return (req, res, next) => {
    const request = {
      body: Object.assign({}, req.body),
      params: Object.assign({}, req.params),
      payload: Object.assign({}, req.payload),
      query: Object.assign({}, req.query),
    };

    Joi.validate(request, schema, { allowUnknown: true }, (error) => {
      if (error) {
        res.status(400).json({ error: error.message || 'Bad request' });

        return;
      }

      next();
    });
  };
};
