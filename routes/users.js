var router = require('express').Router();
var usersCtrl = require('../controllers/users');

/* GET users listing. */


router.get('/', usersCtrl.index);

module.exports = router;
