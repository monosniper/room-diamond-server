const {Schema, model} = require('mongoose');

const ReviewSchema = new Schema({
    fio: {type: String, required: true},
    rating: {type: Number, required: true},
    content: {type: String, required: true},
    isPublic: {type: Boolean, default: false},
}, {timestamps: true});

module.exports = model('Review', ReviewSchema);