const express = require('express');
const router = express.Router();
const passport = require('passport');

const userApiController = require('../controllers/user-api.js');
const msgAPIController = require('../controllers/msg-api');

//routing logic for users
router.route('/users')
.post(userApiController.registerNewUser);

//routing logic for login
router.route('/login')
.post(passport.authenticate('local', {session: false}),
userApiController.login);

//routing logic for message
router.route('/messages')
.get(msgAPIController.getAllMessages)
.post(passport.authenticate('basic', {session: false}),
    msgAPIController.addNewMessage);



module.exports = router;