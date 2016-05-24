var passport = require('passport');
var OAuth2Strategy = require('passport-oauth2').Strategy;
var OAuth2RefreshTokenStrategy = require('passport-oauth2-middleware').Strategy;

var config = require('../config');
var init = require('./init');

var fs = require('fs');
var jwt = require('jsonwebtoken');

var refreshStrategy = new OAuth2RefreshTokenStrategy({
  refreshWindow: 10, // Time in seconds to perform a token refresh before it expires
  userProperty: 'token', // Active user property name to store OAuth tokens
  authenticationURL: '/auth/oauth2', // URL to redirect unathorized users to
  cert: "cert.pem"
});

passport.use('main', refreshStrategy);

var strategy = new OAuth2Strategy(
  {
    authorizationURL: config.oAuth2.authorizationURL,
    tokenURL: config.oAuth2.tokenURL,
    clientID: config.oAuth2.clientID,
    clientSecret: config.oAuth2.clientSecret,
    callbackURL: config.oAuth2.callbackURL,
    passReqToCallback: false
  },
  refreshStrategy.getOAuth2StrategyCallback()
);

passport.use('oauth', strategy);
refreshStrategy.useOAuth2Strategy(strategy);

// serialize user into the session
init();


module.exports = passport;
