// const yup = require('yup');

//put your yup schema from lab 2 here
// const messageSchema = yup.object({
//     name: yup
//     .string()
//     .trim()
//     .min(2, 'Your name must be at least 2 characters!')
//     .max(10, 'Your name cannot be more than 10 character.')
//     .matches(/[A-za-z]{2,}/, 'Invalid name. Use Upper or Lowercase letters only')
//     .required('Your name is required.'),
//     msg: yup
//     .string()
//     .trim()
//     .min(3, 'Your messaged must be at least 3 character!')
//     .max(20, 'Your message must be no more than 20 character.')
//     .required('A message is required')
// });
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: /[A-Za-z]{2,}/,
        trim: true,
        minlength: 2,
        maxlength: 10

    },
    msg: {
        type: String,
        required: true,
        trim:true,
        minlength: 3,
        maxlength: 30
    }
});
module.exports = mongoose.model('message', messageSchema);