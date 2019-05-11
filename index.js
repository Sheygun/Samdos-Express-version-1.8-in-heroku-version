const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const { check, validationResult } = require('express-validator/check');
const path = require('path')
const PORT = process.env.PORT || 5000

var createError = require('http-errors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')


const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/Samdos')

const mongoURI = "mongodb://samdos:emmanuel1@ds123196.mlab.com:23196/samdos";


express()

.use(logger('dev'))
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use(cookieParser())

  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .use('/', indexRouter)
  // .use('/users', usersRouter)

  // Body Parser Middleware
  .use(bodyParser.urlencoded({ extended: false}))
  .use(bodyParser.json())


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
