//var config = require('../config.json');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var User = mongoose.model('user',UserSchema,'trysignup');

//create Schema & model
const UserSchema = new Schema({
  fname: {
      type: String,
       },
  lname: {
    type: String,
    },
  email: {
    type: String
  },
  pwd: {
    type: String
    },
  repwd: {
      type: String
  }  
});


const user = mongoose.model('userlogin',UserSchema);
module.exports = user;