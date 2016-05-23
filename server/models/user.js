var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  id: String,
  name: String,
  email : String,
  token : String,
  roles : [String]
});


module.exports = mongoose.model('users', User);
