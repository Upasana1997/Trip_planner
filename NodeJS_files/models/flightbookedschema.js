const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightBookedSchema = new Schema({
    username: {
        type: String
     },  
    source: {
        type: String
               },     
    destination: {
        type: String
              },             
    airlines: {
        type: String
                }, 
    date : {
        type: String
    }  ,

    return: {
        type: String
    },

    booking: {
        type: String
             },      

});

const FlightBooked = mongoose.model('FlightBookings',FlightBookedSchema);

module.exports = FlightBooked;