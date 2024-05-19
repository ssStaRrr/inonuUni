const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    identificationNumber: {
        type: Number,
        unique: true,
        length: 11
    },
    tez: {
        type: Buffer
    }
})


module.exports = mongoose.model('User', user)