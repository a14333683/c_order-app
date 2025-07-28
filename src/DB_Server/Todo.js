const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const todoShcema = new mongoose.Schema({
    id: Number,
    title: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo',todoShcema);

module.exports = Todo;