const mongoose = require('mongoose');
const userModel = mongoose.model('user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken');

const registerNewUser = (req, res) => {
    //res.status(200).send('Successful API New User POST Request');
    userModel
    .findOne({
        '$or': [
            { email: req.body.email },
            { username: req.body.username }
        ]
    })
    .exec( (error, user) => {
        //bad email or username
        if (error) {
            return res
            .status(400)
            .send('Bad Request. The user in the body of the Request is either missing or malformed');
        } else if (user){
            //user found, this is a duplicate email or username
            return res
            .status(403)
            .send('Forbidden. Username or email already exists');
        } else {
            //got to this point, no errors or duplicates
            userModel
            .create( req.body, (error, user) => {
                if (error) {
                    res
                    .status(400)
                    .send('Bad Request. The user in the body of the Request is either missing or malformed');
                    console.log(error);
                } else  {
                    res.status(201).json(user);
                }
            });
        }
    });
}

//basic authentication strategy

passport.use(new LocalStrategy(
(username, password, done) => {
    userModel
    .findOne({
        '$or': [
            { email: username },
            { username: username }
        ]
    })
    .exec( async (error, user) => {
        if (error) return done(error);

        //user wasn't found
        if (!user) return done(null, false);

        //user was found, see if it's a valid password
        if (!await user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
    });
}
));

//Login Handler
const login = (req,res) => {
    // res.status(200).send('Successful API Login Request');
    jwt.sign(
        { sub: req.user._id},
        process.env.JWT_SECRET,
        { expiresIn: '1h'},
        ( error,token ) => {
            if (error) {
                res
                .status(400)
                .send('Bad Request. Couldn\'t generate token.');
            } else {
                res.status(200).json({ token: token });
            }
        }
    );
};

module.exports = {
    registerNewUser,
    login
};