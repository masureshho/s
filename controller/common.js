var User = require('../model').user();

module.exports = {
  userValidate: function (username, password, cb) {
    User.findOne({
      credential: {
        username: username,
        password: password
      }
    }, '_id', function (error, data) {
      if (data) {
        console.log(data);
        cb(null, true);
      } else
        cb("Error in database", null);
    });


  }
}