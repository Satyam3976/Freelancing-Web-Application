const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GigSchema = new Schema({
  userGid: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userTid: {
    type: Array,
    default: []
  },
  gidID: {
    type: String,
    required:true
  }
});

module.exports = mongoose.model('Gig', GigSchema);