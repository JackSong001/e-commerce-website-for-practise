const Order = require('../models/order');

const order = module.exports;

order.orderList = function (req, res, next) {
    Order.find({ email: req.params.email }).then(orders => {
        if (!orders) {
            res.status(404).json({ message: 'No users Found' });
        }
        res.status(200).json(orders);
    }).catch(error => {
        console.log(error);
    });
}

order.addOrder = function (req, res, next) {
    const order = new Order(req.body);
    order.save().then(response => {
        res.status(200).json({ message: 'order created' });
    }).catch(error => {
        console.log(error);
    })
}