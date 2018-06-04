const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    email: {
        type: String
            },

    source: {
        type: String
        
    }   ,

    destination: {
        type: String
        
    }   ,

    travellers: {
        type: String
        
    }   ,

    start: {
        type: String
        
    }   ,

    end: {
        type: String
        
    }   

});

const Route = mongoose.model('routes',RouteSchema);
module.exports = Route;