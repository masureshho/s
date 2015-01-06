var mongoose = require('mongoose');
var userSchema = require('./userSchema');

var models = {
  user: function () {
    var uSchema = new mongoose.Schema(userSchema);
    return mongoose.model('user', uSchema, "user");
  }
};

module.exports = models;