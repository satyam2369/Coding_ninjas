var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var taskRouter = require('./routes/task')
var app = express();

// app.set("trust proxy" , 1);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://your-client-domain.com');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


const cors = require("cors")
const corsOptions = {
  
  origin: true,// Your frontend URL
  credentials: true, // Enable sending of cookies
};
app.use(cors(corsOptions));




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/task', taskRouter);

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://satyam13omishra:CxHU9WxIbRApFDNS@cluster0.h3grcbt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
