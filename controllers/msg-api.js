// GET request handler
const getAllMessages = (req,res) => {
    res.status(200).send('Successful API GET Request');
};

// POST Request Handler

const addNewMessage = (req,res) => {
    res.status(200).send('Successful API POST Request');
};

module.exports = {
    getAllMessages,
    addNewMessage
}