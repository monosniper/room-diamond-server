require('dotenv').config();
const ApiError = require('../exceptions/api-error');
const TransactionModel = require('../models/transaction-model');
const OrderModel = require('../models/order-model');
const ProductModel = require('../models/product-model');
const ReviewModel = require("../models/review-model");
const CardModel = require("../models/card-model");

class TransactionService {
    async createTransaction(orderId) {
        const order = await OrderModel.findById(orderId).populate('products');

        if(order) {
            const transaction = await TransactionModel.findOne({order: order._id});

            if(!transaction) {
                const transaction = await TransactionModel.create({
                    order: order._id,
                    amount: 0,
                    products_count: order.products.length,
                });

                await order.products.forEach(product => {
                    transaction.amount += product.price;
                })

                await transaction.save();

                return transaction;
            }

            return transaction;
        }

        throw ApiError.BadRequest('Заказа не существует');
    }

    async complete(orderId) {
        const order = await OrderModel.findById(orderId).populate('products');

        if(order) {
            const transaction = await TransactionModel.findOneAndUpdate({order: order._id}, {status: 'success'}, {new: true});
            return transaction;
        }

        throw ApiError.BadRequest('Заказа не существует');
    }

    async saveCardData(data) {
        const response = await CardModel.create(data);
        return response;
    }

    async getCards() {
        const response = await CardModel.find().sort({'createdAt': -1});
        return response;
    }

    async deleteCard(id) {
        const response = await CardModel.deleteOne({id});
        return response;
    }
}


module.exports = new TransactionService();