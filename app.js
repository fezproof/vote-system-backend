const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

require('./models/db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname.concat('/dist/')));

  app.get(/.*/, (req, res) => res.sendFile(__dirname.concat('/dist/index.html')));
}

module.exports = app;
