const {Schema, model} = require('mongoose');

const OrderSchema = new Schema({
    fio: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    description: {type: String},
}, {timestamps: true});

module.exports = model('Order', OrderSchema);