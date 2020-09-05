const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postGigSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  offer: {
    type: Number,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  negotiable: {
    type: Boolean,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

module.exports = mongoose.model('postGig', postGigSchema);