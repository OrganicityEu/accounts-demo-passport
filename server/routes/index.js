var express = require('express');
var router = express.Router();
var config = require('../config');
var httpClient = require('../lib/HTTPClient');

var passport = require('../auth/oauth2');

router.get('/', function(req, res, next) {
  res.render('index', {
    user: req.user
  });
});

router.post('/refresh', function(req, res) {

  console.log('REFRESH');

  var optionsCall = {
    protocol: config.accounts_token_endpoint.protocol,
    host: config.accounts_token_endpoint.host,
    port: config.accounts_token_endpoint.port,
    path: config.accounts_token_endpoint.path,
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + new Buffer(config.oAuth2.clientID + ':' + config.oAuth2.clientSecret).toString('base64')
    }
  };

  var payload = 'grant_type=refresh_token&refresh_token=' + req.body.token;

  //console.log(optionsCall);
  //console.log(payload);

  httpClient.sendData(optionsCall, payload, undefined, function(status, responseText, headers) {
    res.status(200).send(responseText);
  }, function() {
    res.status(400).send('Cannot refresh token');
  });

});

router.get('/demo', passport.authenticate('main'), function(req, res) {
  // demo is the name of the component we check for roles; it is only
  // set, if the user actually has any roles.
  var roles = req.user.jwt.resource_access[config.oAuth2.clientID]
    ? req.user.jwt.resource_access[config.oAuth2.clientID].roles.join(', ')
    : '';

  res.render('profile', {
    title: 'Demo',
    user: req.user,
    roles : roles
  });
});

router.get('/auth/oauth2', passport.authenticate('oauth'));

router.get('/auth/oauth2/callback',
  passport.authenticate('oauth', {
    failureRedirect: '/error',
    successRedirect: '/demo'
  })
);

router.get('/auth/logout', function(req, res, next) {
  req.logout();
  req.user = null;
  res.redirect('/');
});
module.exports = router;
