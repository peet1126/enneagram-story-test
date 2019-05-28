var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    story: [{type: Schema.Types.ObjectId, ref: 'Story'}],
    enResult: [],
  }, {
    timestamps: true
  });


module.exports = mongoose.model('User', userSchema);