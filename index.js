const unleash = require('unleash-server');
const auth = require('./auth-hooks');
const clientAuth = require('./client-hooks');
const DATABASE_URL = process.env.DATABASE_URL || "postgres://postgres:s@defaultdb:5432/unleash";
const SESSION_SECRET = process.env.SESSION_SECRET || "";
const PORT = process.env.PORT || "80";

let hook = null;
switch (process.env.AUTH_TYPE) {
  case 'google':
    hook = auth.Google;
    break;
  case 'basic':
    hook = auth.Basic;
    break;
  default:
}

let options = {
  databaseUrl: DATABASE_URL,
  secret: SESSION_SECRET,
  adminAuthentication: 'custom',
  enableLegacyRoutes: false,
  preRouterHook: app => {
    hook(clientAuth.sharedSecret(app)); // add client checks first then admin checks
  },
  port: PORT,
};

unleash.start(options).then(unleash => {
  console.log(
    `Unleash started on http://localhost:${unleash.app.get('port')}`,
  );
});