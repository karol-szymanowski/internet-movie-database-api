'use strict';

const express = require('express');
const { Op } = require('sequelize');
const validator = require('../middlewares/validator');
const commentsSchema = require('./schemas/comments-schema');
const commentsModel = require('../../models').Comments;

const router = express.Router();

router.post('/comments', validator(commentsSchema.post), (req, res) => {
  commentsModel.upsert({
    movie_id: req.body.ID,
    comment: req.body.comment,
  }, { returning: true }).then((comment) => {
    res.json(comment);
  }).catch((error) => {
    if (error.name === 'SequelizeForeignKeyConstraintError') {
      res.status(404).json({ error: 'Movie id doesn\'t exists' });
    }
    res.status(500).json({ error: 'Something went wrong' });
  });
});

router.get('/comments', (req, res) => {
  const where = {
    movie_id: {
      [Op.or]: [req.query.id, 'undefined'],
    },
  };

  commentsModel.findAll({ where }).then((comments) => {
    res.json(comments);
  }).catch(() => {
    res.status(500).json({ error: 'Something went wrong' });
  });
});

module.exports = router;
