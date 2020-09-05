const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  phone: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  password:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model('user', userSchema);