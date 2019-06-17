var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Web3 = require('web3');
web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


var MyTourismJSON = require(path.join(__dirname, 'build/contracts/AddProduct.json'));
contractAddress = MyTourismJSON.networks['4002'].address;
console.log(contractAddress);
// get abi
const ContractABI = MyTourismJSON.abi;
// creating contract instance
TourismManagement = new web3.eth.Contract(ContractABI,contractAddress);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addTouristRouter= require('./routes/addTourist');
var getTouristRouter= require('./routes/getTourist');
var addProducttRouter= require('./routes/addProductt');
var getProductRouter= require('./routes/getProduct');
var buyProductRouter= require('./routes/buyProduct');
var addTokensRouter= require('./routes/addTokens');


//var getProductRouter=require('./routes/getProduct');
var app = express();

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
app.use('/addTourist', addTouristRouter);
app.use('/getTourist', getTouristRouter);
app.use('/addProductt', addProducttRouter);
app.use('/getProduct', getProductRouter);
app.use('/buyProduct',buyProductRouter);
app.use('/addTokens',addTokensRouter);


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
