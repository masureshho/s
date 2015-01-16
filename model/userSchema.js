module.exports = {
  personal_info: {
    name: {
      first_name: String,
      last_name: String
    },
    sex: String,
    dob: Date,
    email: String,
    designation: String,
    phone_num: [String],
  },
  credential: {
    username: {
      type: String,
      unique: true
    },
    password: String
  },
  role: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: Date
};