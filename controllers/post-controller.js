const ApiError = require("../exceptions/api-error");
const PostService = require("../services/post-service");

class PostController {
    async getAll(req, res, next) {
        try {
            const response = await PostService.getAll();
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try {
            const response = await PostService.getOne(req.params.id);
            return res.json(response);
        } catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            let data = req.body;
            data.image = req.files.image.data;
            const response = await PostService.create(data);
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            await PostService.delete(req.params.id);
            return res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    }

    async edit(req, res, next) {
        try {
            const response = await PostService.edit(req.params.id, req.body);
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new PostController();