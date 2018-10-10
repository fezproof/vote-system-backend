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
app.use(cors());

const posts = require('./routes/index');

app.use('/', posts);

app.use(express.static(path.join(__dirname, 'dist')));

app.get(/\/#\/.*/, (req, res) => res.sendFile(path.join(__dirname, '/dist/index.html')));

module.exports = app;
