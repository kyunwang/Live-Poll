require('dotenv').config({ path: './vars.env' });

var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
// var compression = require('compression');

var webSocket = require('./webSocket');

var app = express();

// Can't think of a good name....
var mainRoute = require('./routes');

var helpers = require('./helpers');

// Require the dotenv file

// Set views
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.set('view engine', 'ejs');

// Set static route
app.use('/', express.static(path.join(__dirname, '/public/'), { maxAge: '31d' }));
// app.use('/public', express.static(path.join(__dirname, '/dist/'), { maxAge: '31d' }));

app.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))

// 	.use(compression())
	.use(function (req, res, next) {
		res.locals.title = 'Live Poll';
		res.locals.timeRefresh = false;
		res.locals.h = helpers;
		next();
	})
	.use('/', mainRoute)

// Define port to listen to
app.listen(3400, function () {
	console.log('server is running on port 3400');
})
