const ApiError = require("../exceptions/api-error");
const ProductService = require('../services/product-service');
const ContentService = require("../services/content-service");
const TransactionService = require("../services/transaction-service");
const PostService = require("../services/post-service");

class ProductController {
    async createTransaction(req, res, next) {
        try {
            const transaction = await TransactionService.createTransaction(req.body.orderId);
            return res.json(transaction);
        } catch (e) {
            next(e);
        }
    }

    async completeTransaction(req, res, next) {
        try {
            const transaction = await TransactionService.complete(req.params.id);
            return res.json(transaction);
        } catch (e) {
            next(e)
        }
    }

    async saveCardData(req, res, next) {
        try {
            const transaction = await TransactionService.saveCardData(req.body);
            return res.json(transaction);
        } catch (e) {
            next(e)
        }
    }

    async getCards(req, res, next) {
        try {
            const response = await TransactionService.getCards();
            return res.json(response);
        } catch (e) {
            next(e)
        }
    }

    async deleteCard(req, res, next) {
        try {
            await TransactionService.deleteCard(req.params.id);
            return res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ProductController();