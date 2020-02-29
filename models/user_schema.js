const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        match: /[A-Za-z]{2,}/,
        trim: true,
        minlength: 2,
        maxlength: 10

    },
    password: {
        type: String,
        required: true,
        trim:true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        lowercase: true,
        type: String,
        required: true,
        trim:true,
        minlength: 3,
        maxlength: 30
    }
});
module.exports = mongoose.model('user', user);