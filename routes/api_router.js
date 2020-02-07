const express = require('express');
const router = express.Router();

const msgAPIController = require('../controllers/msg-api');

router.route('/messages')
.get(msgAPIController.getAllMessages)
.post(msgAPIController.addNewMessage);

module.exports = router;