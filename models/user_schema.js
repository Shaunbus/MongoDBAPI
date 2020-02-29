const mongoose = require('mongoose');
const argon2 = require('argon2');

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function(){
    //hash and salt password
    try {
        const hash = await argon2.hash(this.password, {
            type: argon2.argon2id
        });
        this.password = hash;
    } catch (err) {
        console.log('Error in hasing password' + err);
    }
});

userSchema.methods.verifyPassword = 
    async function(plainTextPassword) {
        const dbHashedPassword = this.password;
        try {
            return await argon2.verify(dbHashedPassword. plainTextPassword);
        } catch (err) {
            console.log('Error verifying password' + err);
        }
    }

module.exports = mongoose.model('user', userSchema);