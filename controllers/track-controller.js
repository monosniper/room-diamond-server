const ApiError = require("../exceptions/api-error");
const TrackService = require('../services/track-service');

class TrackController {
    async searchTrack(req, res, next) {
        try {
            const track = await TrackService.searchTrack(req.query.fio);

            return res.json(track);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new TrackController();