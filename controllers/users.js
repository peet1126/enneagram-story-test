const User = require('../models/user');
const Story = require('../models/story');
module.exports = {
    index,
    new: newAnswers,
};
function newAnswers(req, res) {
    User.findById(req.user._id)
    .then(one => {
        // console.log(one);
        one.story.push(req.body)
        one.enResult.push(req.body)
        one.save();
        // console.log(one);
        // console.log(req.body);
        res.render('users/new', {
            title: 'story',
            // story: req.body,
            user: req.user,
            // enResult: req.body,            
        });
    })
};


function index(req, res, next) {
    User.find({}, function(err, users) {
        console.log(err, req.users);
        res.render('users/index', { 
            title: 'Enneasgram Story Test',
            user: req.user, 
        });
    });
}

