const User = require('../models/user');
const Story = require('../models/story');
module.exports = {
    index,
};

function index(req, res, next) {
    Story.find({}, function(err, stories) {
        console.log(err, req.stories);
        res.render('users/index', { 
            title: 'Enneasgram Story Test',
            stories,
            user: req.user, 
        });
    });
}

