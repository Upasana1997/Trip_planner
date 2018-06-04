const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
    airlines: {
        type: String
                      },         
    source: {
        type: String
    }   ,

    destination: {
        type: String
    }   ,

    arrival: {
        type: String
                },
    departure: {
        type: String
              } ,    
              
    fare : {
        type: String
    }          

});


const Flight = mongoose.model('FlightData',FlightSchema);
module.exports = Flight;