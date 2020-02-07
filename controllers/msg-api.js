
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

const addNewMessage = (req,res) => {
    res.status(200).send('Successful API POST Request');
};

module.exports = {
    getAllMessages,
    addNewMessage
}