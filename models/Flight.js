const mongoose = require('mongoose');

//*Schema
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'JAL', 'ANA']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: Date.now
    },
})

//*Model
const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
