require('dotenv').config();
const ApiError = require('../exceptions/api-error');
const ContentModel = require('../models/content-model');

class ContentService {
    async getContent(name) {
        let content = await ContentModel.find({name});

        if(!content.length) {
            return await ContentModel.create({name});
        }

        return content[0];
    }

    async setContent(name, content) {
        await ContentModel.findOneAndUpdate({name}, {content});
    }
}


module.exports = new ContentService();