var collect = {
	collectUserCredential: function (req, res, next) {
		var user = {
			username: req.body.username || '',
			password: req.body.password || '',
			rememberme: req.body.rememberme || ''
		}
		req.userCredential = user;
		console.log(user);
		return next();
	},

	validateUser: function (req, res, next) {
		if ((req.userCredential.username === 'admin' || req.userCredential.username === "") && (req.userCredential.password === 'admin' || req.userCredential.password === ''))
			return next();
		else {
			res.json({
				sucess: 0,
				message: 'Wrong Username/Password'
			});
		}

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