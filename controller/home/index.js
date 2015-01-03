var login = require('./login');
var mainDashboard = require('./main-dashboard');
var mw = require('../middleware');
module.exports = function (app) {
	app.get('/login', login.renderIndex);
	app.post('/login', login.collectUserCredential, login.validateUser, login.initializeSession);
	app.get('/', mw.authenticate, mainDashboard.dashboardRender);
}