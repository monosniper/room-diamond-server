const ApiError = require("../exceptions/api-error");
const OrderService = require('../services/order-service');
const ProductModel = require('../models/product-model');

class OrderController {
    async createOrder(req, res, next) {
        try {
            const {
                fio,
                city,
                address,
                phone,
                articuls,
                description,
            } = req.body;

            const products = await ProductModel.find().in('articul', articuls);
            // const products = await articuls.map(async (articul) => await ProductModel.findOne({articul})).map(product => product._id);
            console.log(products)
            const order = await OrderService.createOrder({
                fio,
                city,
                address,
                phone,
                products,
                description,
            });

            return res.json(order);
        } catch (e) {
            next(e);
        }
    }

    async getOrder(req, res, next) {
        try {
            const order = await OrderService.getOrder(req.params.id);
            return res.json(order);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new OrderController();