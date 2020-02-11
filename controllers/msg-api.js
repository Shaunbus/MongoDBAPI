const messageSchema = require('../models/message_schema.js');
const mongoose = require('mongoose');
const messageModel = mongoose.model('message');

// const messages = [
//     { name : "Bill", msg : "Hi All!"},
//     { name : "Ann", msg : "ICS 221 is fun!"},
//     { name : "Johnny", msg : "I'm stranded!"},
//     { name : "Barb", msg : "Hi"},
//     { name : "Frank", msg : "Who's tired?"},
//     { name : "Sarah", msg : "I heart React"}];

// GET request handler
const getAllMessages = (req,res) => {
    // if (typeof messages == 'object' && Array.isArray(messages)){
    // res.status(200).json(messages);
    // }else{
    //     res.status(400).send('Bad Request');
    // }
    messageModel
    .find()
    .sort( {'_id': -1})
    .exec( (error, messages) => {
        if (error) {
            res.status(400).send('Bad Request');
        }else {
            res.status(200).json(messages);
        }
    });
};

// POST Request Handler

const addNewMessage = async (req,res) => {
    // try {
    //     let message = await messageSchema.validate(req.body);
    //     messages.unshift(message);
    //     console.log(message)
    //     res 
    //         .status(201)
    //         .send(message)

    // }catch(error){
    //     res
    //         .status(400)
    //         .send('Bad Request. The message in the body of the Request is either missing or malformed')
    // }
    messageModel
    .create( req.body, (error, message) => {
        if (error) {
            res
            .status(400)
            .send('Bad Request. The message in the body of the Request is either missing or malformed');
        }else{
            res.status(201).json(message);
        }
    });
};

module.exports = {
    getAllMessages,
    addNewMessage
}