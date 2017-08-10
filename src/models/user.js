// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model(
  'User',
  new Schema({
    email: { type: String, required: true },
    username: String,
    password: String,
    token: String,
    role: { type: String, default: 'guest' }
  }),
  'User'
);
