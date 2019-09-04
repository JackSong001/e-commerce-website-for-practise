const mongoose = require('mongoose');

const colorSchema = mongoose.Schema({
    name: String,
    color: String,
    link: String,
});


const productSchema = mongoose.Schema({
    name: String,
    brandName: String,
    price: Number,
    size: [String],
    description: String,
    imgList: [String],
    color: [colorSchema],
}, {collection: 'products'});

module.exports = mongoose.model("Product", productSchema);


