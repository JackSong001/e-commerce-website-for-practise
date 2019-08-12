const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    brief: String,
    fullPrice: Number,
    dealPrice: Number,
    bc: [String],
    type: [String],
    packaging: String,
    content: String,
    brand: String,
    manufacturer: String,
    description: [String],
    img: [String],
}, {collection: 'products'});

module.exports = mongoose.model("Product", productSchema)