var common = require('./common');
var middleware = {
	authenticate: function authenticate(req, res, next) {
		if (req.session.user) {
			return next();
		} else if (req.cookies.login) {
			var cookieData = JSON.parse(req.cookies.login);
			console.log(cookieData);
			common.userValidate(cookieData.username, cookieData.password, function (error, result) {
				if (result) {
					req.session.distroy;
					req.session.user = {
						username: cookieData.username
					};
					return next();
				} else
					res.redirect('/login?next=' + req.url);
			});
		} else
			res.redirect('/login?next=' + req.url);
	}
};
module.exports = middleware;