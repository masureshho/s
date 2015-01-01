var collect = require('./collect');

module.exports = function (app) {
	app.all('/', collect.collectUserCredential, collect.validateUser, collect.initializeSession);

}