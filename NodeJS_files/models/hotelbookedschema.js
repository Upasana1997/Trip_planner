const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelBookedSchema = new Schema({
    username: {
        type: String
                      },         
    country: {
        type: String
    }   ,

    name: {
        type: String
    }   ,

    checkin: {
        type: String
                },
    checkout: {
        type: String
              } ,   
              
    rooms: {
        type: String
    },
              
    booking: {
        type: String
    } ,              

});


const HotelBooked = mongoose.model('HotelBookings',HotelBookedSchema);
module.exports = HotelBooked;