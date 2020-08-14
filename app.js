const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const pagination = require('./middlewares/pagination');
const indexRouter = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(pagination.middleware(10,25))
app.use('/products', indexRouter);


module.exports = app;
