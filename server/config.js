var ids = {
  oAuth2: {
    authorizationURL : 'https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth',
    tokenURL : 'https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/token',
    clientID: 'a8309104-ecf2-4aba-b79d-9c147bf8c0a5',
    clientSecret: 'a347a37e-d283-41b7-9fc1-70027bb68a0c',
    callbackURL: 'http://localhost:3000/auth/oauth2/callback'
  }
};

module.exports = ids;
