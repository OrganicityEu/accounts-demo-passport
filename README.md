# OrganiCity - Passport.js Authentication Demo

This repository shows, how the [Organicity Accounts](http://accounts.organicity.eu/) can be used with an oauth2 authentication within [passport.js](http://passportjs.org).

## Code

This code is forked from:

* https://github.com/mjhea0/passport-social-auth
* http://mherman.org/blog/2015/09/26/social-authentication-in-node-dot-js-with-passport/

We modified that code, such it:

* Uses the [passport-oauth2](https://github.com/jaredhanson/passport-oauth2) extension.
* Uses the *Implicit Flow*
* Handles JWT tokens
* [Django](https://docs.djangoproject.com/en/1.7/topics/templates/) template engine