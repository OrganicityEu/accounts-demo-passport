var ids = {
  oAuth2: {
    authorizationURL : 'https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth',
    tokenURL : 'https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/token',
    clientID: 'c7759f3a-8cb0-4ec7-9d96-88c337b725e2',
    clientSecret: '331bf386-b032-4f3d-a0ca-eb3682730467',
    callbackURL: 'http://localhost:3000/auth/oauth2/callback'
  }
};

module.exports = ids;
