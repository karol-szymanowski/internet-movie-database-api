'use strict';

const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/comments', require('./comments'));
router.use('/movies', require('./movies'));

router.all('*', (req, res) => {
  res.status(404).end();
});

module.exports = router;
