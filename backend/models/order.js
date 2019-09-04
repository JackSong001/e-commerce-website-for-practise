const mongoose = require('mongoose');

const itemlistSchema = mongoose.Schema({
    price: Number,
    name: String,
    color: String,
    size: String,
    img: String
});

const orderSchema = mongoose.Schema({
    email:String,
    date:Number,
    price: Number,
    orders : [itemlistSchema],
}, {collection: 'orders'});

module.exports = mongoose.model("Order", orderSchema)