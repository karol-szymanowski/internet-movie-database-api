'use strict';

const express = require('express');
const { Op } = require('sequelize');
const omdbapi = require('../middlewares/omdbapi');
const validator = require('../middlewares/validator');
const moviesSchema = require('./schemas/movies-schema');
const { Movies } = require('../../models');

const router = express.Router();

router.post('/movies', validator(moviesSchema.post), omdbapi, (req, res) => {
  const payload = {
    title: req.movie.Title,
    imdb_id: req.movie.imdbID,
    json_data: req.movie,
  };

  Movies.upsert(payload, { returning: true }).then((response) => {
    res.json(response[0]);
  }).catch(() => {
    res.status(500).json({ error: 'Something went wrong' });
  });
});

router.get('/movies', validator(moviesSchema.get), (req, res) => {
  const where = {
    title: {
      [Op.iLike]: req.query.title ? `%${decodeURI(req.query.title)}%` : '%',
    },
  };

  Movies.findAll({ where }).then((response) => {
    res.json(response);
  }).catch(() => {
    res.status(500).json({ error: 'Something went wrong' });
  });
});

module.exports = router;
