var express  = require('express');
var load     = require('express-load');
var mongoose = require('mongoose');
var flash    = require('express-flash');

var favicon 			 = require('serve-favicon');
var logger 		     = require('morgan');
var methodOverride = require('method-override');
var session 			 = require('express-session');
var bodyParser 	   = require('body-parser');
var multer         = require('multer');
var errorHandler   = require('errorhandler');
var cookie         = require('cookie-parser');

var app = express();

mongoose.connect('mongodb://localhost/waibtec-master', function(err){
  if (err){
    console.log('Erro ao conectar no mongodb: '+err);
  }
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade','ejs');

app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(cookie());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8waibtec' }));
app.use(flash());

app.use(express.static(__dirname+'/public')); 

if ('development' == app.get('env')) {
  app.use(errorHandler());
}

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000...');
});
