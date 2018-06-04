const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SourceAndDestinationSchema = new Schema({
    Source: {
        type: String,
    },
    Destination: {
        type: String,
    }
});

const SourceAndDestination = mongoose.model('sourceanddestination',SourceAndDestinationSchema);

module.exports = SourceAndDestination;