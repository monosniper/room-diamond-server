const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    articul: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: Buffer, required: true},
    sizes: {type: Array, required: true},
    sex: {type: Array, required: true},
}, {timestamps: true});

module.exports = model('Product', ProductSchema);