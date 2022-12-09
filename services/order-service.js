require('dotenv').config();
const ApiError = require('../exceptions/api-error');
const OrderModel = require('../models/order-model');

class OrderService {
    async createOrder(data) {
        const order = await OrderModel.create({...data});

        return order;
    }

    async getOrder(id) {
        const order = await OrderModel.findById(id);
        return order;
    }
}


module.exports = new OrderService();