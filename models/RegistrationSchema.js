const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
        required: false
    },
    message: {
        type: String,
        required: true  
    },
    rating: {
        type: Number,
        required: true
    }
});

module.exports = Registration = mongoose.model('registration', RegistrationSchema);