const messageSchema = require('../models/message_schema.js');

const messages = [
    { name : "Bill", msg : "Hi All!"},
    { name : "Ann", msg : "ICS 221 is fun!"},
    { name : "Johnny", msg : "I'm stranded!"},
    { name : "Barb", msg : "Hi"},
    { name : "Frank", msg : "Who's tired?"},
    { name : "Sarah", msg : "I heart React"}];

// GET request handler
const getAllMessages = (req,res) => {
    if (typeof messages == 'object' && Array.isArray(messages)){
    res.status(200).json(messages);
    }else{
        res.status(400).send('Bad Request');
    }
};

// POST Request Handler

const addNewMessage = async (req,res) => {
    try {
        let message = await messageSchema.validate(req.body);
        messages.unshift(message);
        console.log(message)
        res 
            .status(201)
            .send(message)
        //add message as first element of the array
        //respond with 201 created and the message in the body of the response
    }catch(error){
        res
            .status(400)
            .send('Bad Request. The message in the body of the Request is either missing or malformed')
    }
};

module.exports = {
    getAllMessages,
    addNewMessage
}