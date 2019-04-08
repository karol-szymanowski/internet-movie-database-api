'use strict';

const chai = require('chai');
const supertest = require('supertest');
const httpMocks = require('node-mocks-http');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

global.httpMocks = httpMocks;
global.app = app;
global.request = supertest;
global.expect = chai.expect;
global.chai = chai;
