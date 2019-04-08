'use strict';

const express = require('express');

const router = express.Router({ mergeParams: true });

router.use(require('./comments'));
router.use(require('./movies'));

router.use('*', (req, res) => {
  res.status(404).end();
});

module.exports = router;
