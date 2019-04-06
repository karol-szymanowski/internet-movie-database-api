'use strict';

const app = require('express')();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
