const {Schema, model} = require('mongoose');

const ContentSchema = new Schema({
    name: {type: String, required: true},
    content: {type: String, default: ''},
}, {timestamps: true});

module.exports = model('Content', ContentSchema);