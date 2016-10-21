
var express = require('express');
var server = express();
var cors = require('cors');
var authorize = require('./middeware/auth.js');
var logger = require('./middleware/logger.js');
var forecastRouter = require('./routers/forecast.router.js');
var indexRouter = require('./routers/forecast.router.js');

var port = process.env.PORT || 8080;
server.use(express.static(__dirname + '/public')); //what is express.static?
server.use(logger);
server.use(cors());
server.use(authorize);
server.use(indexRouter);
server.use(forecastRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
