const mongoose = require('mongoose');
const userModel = mongoose.model('user');

const registerNewUser = (req, res) => {
    res.status(200).send('Successful API New User POST Request');
}

module.exports = {
    registerNewUser
};