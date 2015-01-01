var collect = {
	collectUserCredential: function (req, res, next) {
		var user = {
			username: req.body.username || '',
			password: req.body.password || '',
			rememberme: req.body.rememberme || ''
		}
		req.userCredential = user;
		return next();
	},

	validateUser: function (req, res, next) {
		return next();

	},
	initializeSession: function (req, res, next) {
		req.session.distroy;
		req.session.user = {
			username: req.userCredential.username,
			password: req.userCredential.username
		}

		if (req.session.user.username.length)
			res.end("Main Page");
		else
			res.redirect('/login');

	}
};

module.exports = collect;