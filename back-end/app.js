var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var signInRouter = require('./routes/signIn');
var signUpRouter = require('./routes/signUp');
var forg_pwRouter = require('./routes/forg_pw');
var changeforg_pwRouter = require('./routes/changeforg_pw');
var changeRouter = require('./routes/change_pw')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/signIn', signInRouter);
app.use('/signUp', signUpRouter);
app.use('/forgotPassword', signUpRouter);
app.use('/changeForgotPassword', signUpRouter);
app.use('/change', signUpRouter);

module.exports = app;
