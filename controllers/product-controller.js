const ApiError = require("../exceptions/api-error");
const ProductService = require('../services/product-service');
const ContentService = require("../services/content-service");
const ProductDto = require("../dtos/product-dto");

class ProductController {
    async getAllProducts(req, res, next) {
        try {
            const {sizes, sex} = req.query;

            let filter = sizes && sex && {
                sizes: sizes.split(','),
                sex: sex.split(','),
            };

            const products = await ProductService.getAllProducts(filter || false);
            return res.json(products);
        } catch (e) {
            next(e);
        }
    }

    async createProduct(req, res, next) {
        try {
            let data = req.body;
            data.image = req.files.image.data;
            data.sizes = data.sizes.split(',');
            data.sex = data.sex.split(',');
            const product = await ProductService.createProduct(data);
            return res.json(product);
        } catch (e) {
            next(e);
        }
    }

    async deleteProduct(req, res, next) {
        try {
            await ProductService.deleteProduct(req.params.id);
            return res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    }

    async editProduct(req, res, next) {
        try {
            const product = await ProductService.editProduct(req.params.id, req.body);
            return res.json(product);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ProductController();