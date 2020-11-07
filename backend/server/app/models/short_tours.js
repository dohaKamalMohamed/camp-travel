const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const shortTourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    mobile: {
        type: String,
        required: true,
        trim: true,
    },
    tourName: {
        type: String,
        required: true,
        trim: true,
    },
    tourDate: {
        type: String,
        required: true,
        trim: true,
    },

    personNumber: {
        type: String,
        required: true,
        trim: true,
    },

    childNumber: {
        type: String,
        required: true,
        trim: true,
    },

    chairNumber: {
        type: String,
        required: true,
        trim: true,
    },

    addChairNumber: {
        type: String,
        required: true,
        trim: true,
    },

    paid: {
        type: String,
        required: true,
        trim: true,
    },

    remaining: {
        type: String,
        required: true,
        trim: true,
    },



},
    {
        timestamps: true,
    }).plugin(AutoIncrement, { inc_field: 'shortTourID' });


const shortTour = mongoose.model('short_tours', shortTourSchema);


exports.shortTour = shortTour;


