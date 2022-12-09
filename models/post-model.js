const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    articul: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: Buffer, required: true},
}, {timestamps: true});

module.exports = model('Post', PostSchema);