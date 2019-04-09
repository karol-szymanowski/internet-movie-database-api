'use strict';

const axios = require('axios');
const API_KEY = require('../../config').omdbApiKey;

module.exports = (req, res, next) => {
  if (!req.body) {
    res.status(500).json({ error: 'Unknown error' });

    return;
  }
  axios.get(`http://www.omdbapi.com/?t=${req.body.title}&apikey=${API_KEY}`).then((movie) => {
    req.movie = movie.data;
    next();
  }).catch(() => {
    res.status(500).json({ error: 'Can\'t connect with db, try again later' });
  });
};
