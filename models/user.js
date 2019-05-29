var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
  question1: String,
  
}, {
  timestamps: true,
});

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    story: [storySchema],
    // story: [{type: Schema.Types.ObjectId, ref: 'Story'}],
    enResult: [],
  }, {
    timestamps: true
  });


module.exports = mongoose.model('User', userSchema);