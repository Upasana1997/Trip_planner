const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    country: {
        type: String
                      },         
    name: {
        type: String
    }   ,

    contact: {
        type: String
    }   ,

    rent: {
        type: String
                },
    rating: {
        type: String
              } ,             

});


const Hotel = mongoose.model('HotelData',HotelSchema);
module.exports = Hotel;