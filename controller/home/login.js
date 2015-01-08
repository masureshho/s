var common = require('../common');
var collect = {
	renderIndex: function (req, res, next) {
		var nextUrl = req.query.next ? req.query.next : '/'
		res.render('login/index', {
			nextUrl: nextUrl
		});
	},

	collectUserCredential: function (req, res, next) {
		var user = {
			username: req.body.username,
			password: req.body.password,
			rememberme: req.body.rememberme
		}
		req.userCredential = user;
		return next();
	},

	validateUser: function (req, res, next) {
		common.userValidate(req.userCredential.username, req.userCredential.password, function (error, result) {
			if (result)
				return next();
			else {
				res.json({
					success: 0,
					message: 'Wrong Username/Password'
				});
			}
		});
	},
	initializeSession: function (req, res, next) {
		req.session.distroy;
		req.session.user = {
			username: req.userCredential.username
		};
		res.json({
			cookie: req.userCredential.rememberme ? 1 : 0,
			username: req.userCredential.username,
			password: req.userCredential.password
		});
		res.end();
	},
	logout: function (req, res, next) {
		req.session.user = null;
		res.send('/login');
	}
};
module.exports = collect;