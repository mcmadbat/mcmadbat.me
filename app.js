'use strict'

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

// handlebar
const exphbs = require('express-handlebars')
const hbs = exphbs.create({
  defaultLayout: path.join(__dirname, '/views/layouts/main')
})

app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// routers
const index = require('./routes/index')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var msg = `CODE 404: ${req.path} does not exist!`
  var err = new Error(msg)
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // only leak msg in development
  var msg = app.get('env') === 'development' ? err.message : ''

  // render the error page
  res.status(err.status || 500)
  res.render('error', { layout: false, message: msg })
})

module.exports = app
