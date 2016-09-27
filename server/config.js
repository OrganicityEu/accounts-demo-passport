var config = {
  oAuth2: {
    authorizationURL : 'https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/auth',
    tokenURL : 'https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/token',
    clientID: 'annotations-dev',
    clientSecret: 'acc36b3e-7af5-4802-b79c-158282dbcb70',
    callbackURL: 'http://localhost:3000/auth/oauth2/callback'
  }
};

config.accounts_token_endpoint = {
	protocol: 'https',
	host: 'accounts.organicity.eu',
	port: '443',
	path: '/realms/organicity/protocol/openid-connect/token',
};

module.exports = config;
