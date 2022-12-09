const {Schema, model} = require('mongoose');

const TransactionSchema = new Schema({
    order: {type: Schema.Types.ObjectId, ref: 'Order'},
    amount: {type: Number, required: true},
    status: {type: String, default: 'pending'},
    products_count: {type: Number, required: true},
}, {timestamps: true});

module.exports = model('Transaction', TransactionSchema);