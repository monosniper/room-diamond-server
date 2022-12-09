const ApiError = require("../exceptions/api-error");
const ContentService = require('../services/content-service');

class ContentController {
    async getContent(req, res, next) {
        try {
            const content = await ContentService.getContent(req.params.name);
            return res.json(content);
        } catch (e) {
            next(e);
        }
    }

    async setContent(req, res, next) {
        try {
            await ContentService.setContent(req.params.name, req.body.content);
            return res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ContentController();