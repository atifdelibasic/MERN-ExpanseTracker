const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Expense = new Schema({
    title: { type:String, required:true },
    expense: { type: Number, required: true }
});

const expense = mongoose.model('Expense', Expense);

module.exports = expense;
