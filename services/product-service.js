require('dotenv').config();
const ApiError = require('../exceptions/api-error');
const ProductModel = require('../models/product-model');
const ProductDto = require("../dtos/product-dto");

class ProductService {
    async getAllProducts(filter) {

        let query = ProductModel.find();

        filter && query.in('sizes', filter.sizes).or([{sex: {$in: filter.sex}}]);

        const products = await query.exec();

        return products.map(product => new ProductDto(product))

        // const products = filter ? await ProductModel.find().in('sizes', filter.sizes).in('sex', filter.sex) : await ProductModel.find();
        //
        // return products.map(product => new ProductDto(product));
    }

    async createProduct(data) {
        const product = await ProductModel.create(data);
        return new ProductDto(product);
    }

    async deleteProduct(id) {
        await ProductModel.deleteOne({id});
    }

    async editProduct(id, data) {
        const product = await ProductModel.findOneAndUpdate({id}, data, {new: true});
        return new ProductDto(product);
    }
}


module.exports = new ProductService();