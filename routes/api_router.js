const express = require('express');
const router = express.Router();

const userApiController = require('../controllers/user-api.js');
const msgAPIController = require('../controllers/msg-api');

//routing logic for users
router.route('/users')
.post(userApiController.registerNewUser);

//routing logic for message
router.route('/messages')
.get(msgAPIController.getAllMessages)
.post(msgAPIController.addNewMessage);

module.exports = router;