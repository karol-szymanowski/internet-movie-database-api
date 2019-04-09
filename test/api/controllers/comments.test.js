'use strict';

const { Comments, Movies } = require('../../../models');

describe('Controller: Comments', () => {
  beforeEach((done) => {

    const comment = [{
      movie_id: 1,
      comment: 'test',
    },{
      movie_id: 2,
      comment: 'test',
    }];
    const movie = [{
      id: 1,
      title: 'test',
      imdb_id: 'test1',
    },{
      id: 2,
      title: 'test2',
      imdb_id: 'test2',
    }];

    Movies.bulkCreate(movie, { ignoreDuplicates: true }).then(() => {
      Comments.bulkCreate(comment, { ignoreDuplicates: true }).then(() => {
        done();
      });
    });
  });

  afterEach((done) => {
    Comments.destroy({ where: {} }).then(() => {
      Movies.destroy({ where: {} }).then(() => {
        done();
      });
    });
  });

  it('Should add comment', (done) => {
    request(app)
      .post('/comments')
      .set('Content-Type', 'application/json')
      .send({
        ID: 1,
        comment: 'test',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.ok;
        expect(res).to.have.status(200);

        done();
      });
  });

  it('Should return 400 if movie id doesn\'t exist', (done) => {
    request(app)
      .post('/comments')
      .set('Content-Type', 'application/json')
      .send({
        ID: 99999999,
        comment: 'test',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.ok;
        expect(res).to.have.status(400);

        done();
      });
  });

  it('Should get all comments', (done) => {
    request(app)
      .get('/comments')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.ok;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').to.have.lengthOf(2);

        done();
      });
  });

  it('Should get specific movie comments', (done) => {
    request(app)
      .get('/comments?id=1')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.be.ok;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').to.have.lengthOf(1);

        done();
      });
  });
});
