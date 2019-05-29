var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var storySchema = new Schema({
    questionOne: {
        enum: ["Are you like this or this?"],
        answerA: {
            text: ["be cool."],
            enType: ['7'],
        },
        enum: ["Are you like this or this?"],
        answerB: {
            text: ["wanting to argue."],
            enType: ['8'],
        },
        enum: ["Are you like this or this?"],
        answerC: {
            text: ["feel melancholy."],
            enType: ['4'],
        },
        enum: ["Are you like this or this?"],
        answerD: {
            text: ["Do the math."],
            enType: ['5'],
        },

    },

}, {
    timestamps: true,
});

// module.exports = mongoose.model('Story', storySchema);