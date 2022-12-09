const ApiError = require("../exceptions/api-error");
const ReviewService = require("../services/review-service");

class ReviewController {
    async getAll(req, res, next) {
        try {
            const response = await ReviewService.getAll();
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }

    async create(req, res, next) {
        try {
            const response = await ReviewService.create(req.body);
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            await ReviewService.delete(req.params.id);
            return res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try {
            const response = await ReviewService.edit(req.params.id, req.body);
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ReviewController();