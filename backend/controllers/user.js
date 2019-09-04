const express = require('express');

const User = require('../models/user');

const account = module.exports;

account.userList = function (req, res, next) {
    User.find((err, docs) => {
        res.status(200).json(docs);
    })
}

account.user = function (req, res, next) {
    User.findOne({ email: req.params.email, password: req.params.password }).then(user => {
        if (!user) {
            res.status(404).json({ message: 'No users Found' });
        }
        res.status(200).json(user);
    }).catch(error => {
        console.log(error);
    });
}

account.userInfo = function (req, res, next) {
    User.findOne({ email: req.params.email }).then(user => {
        if (!user) {
            res.status(404).json({ message: 'No users Found' });
        }
        res.status(200).json(user);
    }).catch(error => {
        console.log(error);
    });
}

account.addUser = function (req, res, next) {
    const user = new User(req.body);
    user.save().then(response => {
        res.status(200).json({ message: 'account created' });
    }).catch(error => {
        console.log(error);
    })
}

account.updateUser = function (req, res, next) {
    User.findOneAndUpdate(
        { email: req.params.email },// <-- find stage
        {
            $set: {                 // <-- set stage
                id: req.body.id,    // <-- id not _id
                email: req.body.email,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                country: req.body.country,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                phone: req.body.phone,
                bod: req.body.bod
            }
        }, { upsert: true }   // <-- create new one if not find
        ).then(response => {
            console.log(response);
            res.status(200).json(response);
        }).catch(error => {
            console.log(error);
        })
}
