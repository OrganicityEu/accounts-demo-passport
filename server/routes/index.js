var express = require('express');
var router = express.Router();

var passportOauth2 = require('../auth/oauth2');


router.get('/', function(req, res, next) {
  res.render('index', {
    user: req.user
  });
});


router.get('/profile', function(req, res, next) {
  console.log();
  if(!req.user) {
    res.render('error', {
      message: '401 Unauthorized',
      error : {
        status: 'You\'re not logged in!'
      }
    });
  } else {
    res.render('profile', {
      title: 'Profile',
      user: req.user
    });
  }
});

router.get('/auth/oauth2', passportOauth2.authenticate('oauth2'));

router.get('/auth/oauth2/callback',
  passportOauth2.authenticate('oauth2', {
    failureRedirect: '/error',
    successRedirect: '/profile'
  }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  }
);

router.get('/auth/logout', function(req, res, next) {
  req.logout();
  req.user = null;
  res.redirect('/');
});
module.exports = router;
