'use strict';

const { Movies } = require('../../../models');

describe('Controller: Movies', () => {
  beforeEach((done) => {
    const movie = [{
      id: 1,
      title: 'test',
      imdb_id: 'test1',
    },{
      id: 2,
      title: 'test2',
      imdb_id: 'test2',
    },{
      id: 3,
      title: 'Mamma mia!',
      imdb_id: 'test3',
    }];

    Movies.bulkCreate(movie, { ignoreDuplicates: true }).then(() => {
      done();
    });
  });

  afterEach((done) => {
    Movies.destroy({ where: {} }).then(() => {
      done();
    });
  });

  it('Should fail if body has wrong properies', (done) => {
    request(app)
      .post('/movies')
      .set('Content-Type', 'application/json')
      .send({
        title: 'driver',
        badproperty: 'ww',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.ok;
        expect(res).to.have.status(400);

        done();
      });
  });

  it('Should save movie and return movie object', (done) => {
    request(app)
      .post('/movies')
      .set('Content-Type', 'application/json')
      .send({
        title: 'driver',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.ok;
        expect(res).to.have.status(200);
        expect(res.body[0]).to.contain.keys('title', 'id', 'imdb_id', 'json_data');

        done();
      });
  });

  it('Should get all movies', (done) => {
    request(app)
      .get('/movies')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.ok;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').to.have.lengthOf(3);

        done();
      });
  });

  it('Should get all movies with word "test" in title', (done) => {
    request(app)
      .get('/movies?title=test')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.ok;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').to.have.lengthOf(2);

        done();
      });
  });
});
