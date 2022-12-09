require('dotenv').config();
const ApiError = require('../exceptions/api-error');
const ReviewModel = require('../models/review-model');

class ReviewService {
    constructor() {
        this.model = ReviewModel;
    }

    async getAll() {
        const response = await this.model.find({isPublic: true}).sort({'createdAt': -1});
        return response;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async edit(id, data) {
        const response = await this.model.findOneAndUpdate({id}, data);
        return response;
    }

    async delete(id) {
        const response = await this.model.deleteOne({id});
        return response;
    }
}


module.exports = new ReviewService();