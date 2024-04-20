const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    identificationNumber: {
        type: Number,
        length: 11
    }
})


module.exports = mongoose.model('User', user)