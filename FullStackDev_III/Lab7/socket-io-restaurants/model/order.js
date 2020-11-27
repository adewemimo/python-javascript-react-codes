const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: String,
    item: {
        type: String,
        require: true
    },
    customer_name: {
        type: String,
        require: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

const Order = mongoose.model('Order', orderSchema, 'orders');
module.exports = Order;