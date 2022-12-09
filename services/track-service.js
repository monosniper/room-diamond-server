require('dotenv').config();
const ApiError = require('../exceptions/api-error');

class TrackService {
    async searchTrack(fio) {
        throw ApiError.BadRequest('Ничего не найдено');
    }
}


module.exports = new TrackService();