'use strict';

const express = require('express');
const { Op } = require('sequelize');
const validator = require('../middlewares/validator');
const commentsSchema = require('./schemas/comments-schema');
const { Comments } = require('../../models');
const logger = require('../helpers/logger');

const router = express.Router();

router.post('/', validator(commentsSchema.post), (req, res) => {
  Comments.upsert({
    movie_id: req.body.ID,
    comment: req.body.comment,
  }, { returning: true }).then((comment) => {
    res.json(comment[0]);
  }).catch((error) => {
    if (error.name === 'SequelizeForeignKeyConstraintError') {
      res.status(400).json({ error: 'Movie id doesn\'t exists' });
      return;
    }
    logger.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  });
});

router.get('/', (req, res) => {
  const where = req.query.id && {
    movie_id: {
      [Op.eq]: req.query.id,
    },
  };

  Comments.findAll({ where }).then((comments) => {
    res.json(comments);
  }).catch((error) => {
    logger.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  });
});

module.exports = router;
