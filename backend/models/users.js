const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const { Schema, model } = mongoose;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

userSchema.pre('save', function (next) {
  console.log('----------->', this.email, this.password)
  const hashedPassword = bcrypt.hashSync(this.password, 12)
  this.password = hashedPassword
  next()
})


const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;

