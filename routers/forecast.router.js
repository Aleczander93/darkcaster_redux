var express = require('express');
var axios = require('axios'); //axios(promise) allows us to request from darksky database
var authorize = ('../middleware/auth.js');
var router = express.Router();
var apiKey = process.env.APIKEY || require('../config.js').apiKey;
var timeoutConfig = {
  timeout: 2000
};

router.use(authorize);

router.get('/forecast/:longitude,:latitude', function(request, response){
  var url = forecastURL(request.params.longitude, request.params.latitude);
  axios.get(url, timeoutConfig)
    .then(function(forecast){
      response.send(forecast.data);
    })
    .catch(function(error){
      response.send(error);
    });
});

module.exports=router;

function forecastURL (latitude, longitude) {
  var url = 'https://api.darksky.net/forecast/' + apiKey + '/' + latitude + ',' + longitude;
  return url;
}
