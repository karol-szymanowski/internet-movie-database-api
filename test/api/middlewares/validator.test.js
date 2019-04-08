'use strict';

const Joi = require('joi');
const eventEmitter = require('events').EventEmitter;
const validator = require('../../../api/middlewares/validator');

let response = {};
let next = {};
const schema = {
  body: {
    test: Joi.string().required(),
  },
};
const middleware = validator(schema);

describe('Middleware: Validator', () => {
  beforeEach(() => {
    response = httpMocks.createResponse({
      eventEmitter,
    });

    next = () => {
      response.status(200).end();
    };
  });

  it('Should respond with status 200 when valid request', (done) => {
    const request = httpMocks.createRequest({
      body: {
        test: 'pass',
      },
    });

    response.on('end', () => {
      expect(response).to.be.ok;
      expect(response.statusCode).to.equal(200);

      done();
    });

    middleware(request, response, next);
  });

  it('Should respond with status 400 when invalid request', (done) => {
    const request = httpMocks.createRequest({
      body: {
        fail: true,
      },
    });

    response.on('end', () => {
      expect(response).to.be.ok;
      expect(response.statusCode).to.equal(400);

      done();
    });

    middleware(request, response, next);
  });
});
