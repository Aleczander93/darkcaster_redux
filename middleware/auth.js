

var mySecretPassword = process.env.PASS || require('../config.js').secretPassword;
//wtf is process.env.PASS???? think of apartment mailbox but for heroku

function authorize(request, response, next){
  var secretPassword = request.headers.secret;
    if (!secretPassword || secretPassword !=='How you like me now'){
      response.status(403).json({
        msg: 'You shall not pass!!!'
      });
    } else {
      next();
    }
}


module.exports = authorize;
