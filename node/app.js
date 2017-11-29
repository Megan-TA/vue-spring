var express = require('express')
var path = require('path')
// var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
let Cors = require('./util/middleware/cors')

// 引入mongo部分
// var session = require('express-session')
var settings = require('./settings')
// 用于存储session到mongo中
// var MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')

// toekn认证模块
const passport = require('passport') // 用户认证模块passport
const Strategy = require('passport-http-bearer').Strategy // token验证模块

// 路由
var renderRoutes = require('./routes/router')
// var users = require('./routes/users')

var app = express()

app.use(Cors)
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(passport.initialize()) // 初始化passport模块
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser(settings.cookieSecret))
app.use(express.static(path.join(__dirname, 'public')))

renderRoutes(app)

mongoose.Promise = global.Promise

// session引入mongo临时会话cookie
// app.use(session({
//     name: 'session_id',
//     secret: settings.cookieSecret,
//     key: settings.db,         // cookie name
//     resave: true,
//     saveUninitialized: true
// }))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
