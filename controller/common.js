var User = require('../model').user();

module.exports = {
  userValidate: function (username, password, cb) {
    User.findOne({
      username: username
    }, 'password', function (error, data) {
      if (data) {
        console.log(data['password']);
        result = (password == data.password) ? true : false cb(null, result);
      } else
        cb("Error in database", null);
    });

  }
}