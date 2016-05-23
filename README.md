# OrganiCity Accounts - Passport.js Demo

This repository shows, how the [Organicity Accounts](http://accounts.organicity.eu/) can be used with the [passport-oauth2](https://github.com/jaredhanson/passport-oauth2) extension for [passport.js](http://passportjs.org).

This code is forked from:

* https://github.com/mjhea0/passport-social-auth

The modified code

* uses the [passport-oauth2](https://github.com/jaredhanson/passport-oauth2) extension
* uses the *Implicit Flow*
* Decodes and verifies [JWT tokens](https://jwt.io/) with [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

## Getting started

### Ubuntu 14.04

```
git clone git@github.com:OrganicityEu/accounts-demo-passport.git
cd accounts-demo-passport
npm install
npm start
```

Open: http://localhost:3000