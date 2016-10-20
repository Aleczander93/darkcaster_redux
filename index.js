
var express = require('express');
var server = express();
var cors = require('cors');
var authorize = require('./middeware/auth.js');
var logger = require('./middleware/logger.js');
var forecastRouter = require('./routers/forecast.router.js');
var indexRouter = require('./routers/forecast.router.js');

var port = process.env.PORT || 8080;

server.use(server);

server.use(logger);
server.use(authorize);
server.use(indexRouter);
server.use(forecastRouter);
