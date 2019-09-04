const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    country: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phone: Number,
    bod: Number, 
}, {collection: 'users'});

module.exports = mongoose.model('User', userSchema);