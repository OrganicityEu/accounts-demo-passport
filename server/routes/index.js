var express = require('express');
var router = express.Router();

var passport = require('../auth/oauth2');

router.get('/', function(req, res, next) {
  res.render('index', {
    user: req.user
  });
});


router.get('/profile', passport.authenticate('main'), function(req, res) {
  // demo is the name of the component we check for roles; it is only
  // set, if the user actually has any roles.
  var roles = req.user.jwt.resource_access.demo
    ? req.user.jwt.resource_access.demo.roles.join(', ')
    : '';

  res.render('profile', {
    title: 'Profile',
    user: req.user,
    roles : roles
  });
});

router.get('/auth/oauth2', passport.authenticate('oauth'));

router.get('/auth/oauth2/callback',
  passport.authenticate('oauth', {
    failureRedirect: '/error',
    successRedirect: '/profile'
  })
);

router.get('/auth/logout', function(req, res, next) {
  req.logout();
  req.user = null;
  res.redirect('/');
});
module.exports = router;
