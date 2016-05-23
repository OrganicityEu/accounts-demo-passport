# OrganiCity Accounts - Passport.js Demo

This repository shows, how the [Organicity Accounts](http://accounts.organicity.eu/) can be used with the [passport-oauth2](https://github.com/jaredhanson/passport-oauth2) extension for [passport.js](http://passportjs.org).

This code is forked from:

* https://github.com/mjhea0/passport-social-auth

We modified that code, such it:

* Uses the [passport-oauth2](https://github.com/jaredhanson/passport-oauth2) extension
* Uses the *Implicit Flow*
* Decodes JWT tokens with [jwt-decode](https://github.com/auth0/jwt-decode)

## Getting started

### Ubuntu 14.04

```
git clone git@github.com:OrganicityEu/accounts-demo-passport.git
cd accounts-demo-passport
npm install
npm start
```

Open: http://localhost:3000