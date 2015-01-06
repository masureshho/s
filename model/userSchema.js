module.exports = {
  username: {
    type: String,
    unique: true
  },
  password: String,
  createdOn: {
    type: Date,
    default: Date.now
  }
};