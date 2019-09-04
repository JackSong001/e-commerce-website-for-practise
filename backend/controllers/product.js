const express = require('express');
// const products = require('../models/product.mock');
const Product = require('../models/product');
const product = module.exports;

// product.getProducts = function(req, res, next) {
//     res.json(products);
// };

// product.getProduct = function(request, response) {
//     response.json(products.find( (product) => product.name == request.params.name));
// };

product.getProducts = function(req,res) {
    Product.find((err, docs) => {
        res.status(200).json(docs);
    });
}

product.getProduct = function(req, res) {
    const {name} = req.params;
    Product.findOne({name}, (err, doc) => {
        res.status(200).json(doc);
    })
}

product.postProducts = function(req, res, next) {
    const product = new Product( {
        name: req.body.name,
        brandName: req.body.brandName,
        price: req.body.price,
        size: req.body.size,
        description: req.body.description,
        imgList: req.body.imgList,
        color: req.body.color
    })
    product.save().then(response => {
        res.status(200).json({message: 'product created'});
    }).catch(error => {
        console.log(error);
    })
}