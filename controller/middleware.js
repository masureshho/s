var middleware = {
	authenticate: function authenticate(req, res, next) {
		if (req.session.user) {
			return next();
		} else {
			var next = req.url;
			res.redirect('/login?next=' + next);
		}
	}
};

module.exports = middleware;