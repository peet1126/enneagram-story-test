const Student = require('../models/user');

module.exports = {
    index,
};

function index(req, res, next) {
    console.log(req.user);
    res.render('users/index', { 
        title: 'Enneagram Story Test',
        user: req.user
    });
};

