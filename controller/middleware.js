var validate = function (username, password) {
	return (username == "admin" && password == "admin") ? true : false
}

var middleware = {
	authenticate: function authenticate(req, res, next) {
		if (req.session.user) {
			return next();
		} else if (req.cookies.login) {
			var cookieData = JSON.parse(req.cookies.login);
			console.log(cookieData.username);
			if (validate(cookieData.username, cookieData.password))
				return next();
		}
		var next = req.url;
		res.redirect('/login?next=' + next);
	}
};

module.exports = middleware;