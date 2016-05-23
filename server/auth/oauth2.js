var passport = require('passport');
var OAuth2Strategy = require('passport-oauth2').Strategy;

var User = require('../models/user');
var config = require('../config');
var init = require('./init');

var jwtDecode = require('jwt-decode');

passport.use(new OAuth2Strategy({
      authorizationURL: config.oAuth2.authorizationURL,
      tokenURL: config.oAuth2.tokenURL,
      clientID: config.oAuth2.clientID,
      clientSecret: config.oAuth2.clientSecret,
      callbackURL: config.oAuth2.callbackURL,
      passReqToCallback: true
  },
  function(req, token, refreshToken, profile, done) {

    var profile = jwtDecode(token);
    console.log('profile', profile);

    var searchQuery = {
      id: profile.sub
    };

    var updates = {
      token: token,
      name: profile.name,
      email: profile.email,
      roles: (profile.resource_access.demo) ? profile.resource_access.demo.roles : []
    };

    var options = {
      upsert: true
    };

    // update the user if she/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });

  }

));

// serialize user into the session
init();


module.exports = passport;
