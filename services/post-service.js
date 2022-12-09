require('dotenv').config();
const ApiError = require('../exceptions/api-error');
const PostModel = require('../models/post-model');
const PostDto = require("../dtos/post-dto");

class PostService {
    constructor() {
        this.model = PostModel;
    }

    async getAll() {
        const response = await this.model.find().sort({'createdAt': -1});
        return response.map(post => new PostDto(post));
    }

    async getOne(id) {
        const response = await this.model.findById(id);
        return new PostDto(response);
    }

    async create(data) {
        const response = await this.model.create(data);
        return new PostDto(response);
    }

    async edit(id, data) {
        const response = await this.model.findOneAndUpdate({id}, data);
        return new PostDto(response);
    }

    async delete(id) {
        const response = await this.model.deleteOne({id});
        return response;
    }
}


module.exports = new PostService();