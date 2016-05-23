var ids = {
  oAuth2: {
    authorizationURL : 'https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth',
    tokenURL : 'https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/token',
    clientID: 'demo',
    clientSecret: null,
    callbackURL: "http://localhost:3000/auth/oauth2/callback"
  }
};

module.exports = ids;
