const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    name: {
        type: String
         },
    email: {
        type: String
        },
    contact: {
        type: String
         },  
    feedback: {
        type: String
       }                         

});

const Feedback = mongoose.model('Feedbackdata',FeedbackSchema);
module.exports = Feedback;
