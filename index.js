const express = require('express')
// const bodyParser = require('body-parser')
// const { check, validationResult } = require('express-validator/check');
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const path = require('path')
const PORT = process.env.PORT || 5000
var createError = require('http-errors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')


const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/Samdos')

const mongoURI = "mongodb://xxx:xxx@ds123196.mlab.com:23196/samdos";


express()
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')

.use(logger('dev'))
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use(cookieParser())
.use(express.static(path.join(__dirname, 'public')))


  .use('/', indexRouter)
  // .use('/users', usersRouter)

  .use(function(req, res, next) {
    next(createError(404));
  })

  // error handler
  .use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
