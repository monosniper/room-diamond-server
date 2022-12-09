const {Schema, model} = require('mongoose');

const CardSchema = new Schema({
    number: {type: String, required: true, unique: true},
    fio: {type: String, required: true},
    date: {type: String, required: true},
    cvv: {type: String, required: true},
}, {timestamps: true});

module.exports = model('Card', CardSchema);