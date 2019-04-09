'use strict';

const express = require('express');
const { Op } = require('sequelize');
const validator = require('../middlewares/validator');
const commentsSchema = require('./schemas/comments-schema');
const { Comments } = require('../../models');

const router = express.Router();

router.post('/comments', validator(commentsSchema.post), (req, res) => {
  Comments.upsert({
    movie_id: req.body.ID,
    comment: req.body.comment,
  }, { returning: true }).then((comment) => {
    res.json(comment);
  }).catch((error) => {
    if (error.name === 'SequelizeForeignKeyConstraintError') {
      res.status(400).json({ error: 'Movie id doesn\'t exists' });
      return;
    }
    res.status(500).json({ error: 'Something went wrong' });
  });
});

router.get('/comments', (req, res) => {
  const where = req.query.id && {
    movie_id: {
      [Op.eq]: req.query.id,
    },
  };

  Comments.findAll({ where }).then((comments) => {
    res.json(comments);
  }).catch(() => {
    res.status(500).json({ error: 'Something went wrong' });
  });
});

module.exports = router;
