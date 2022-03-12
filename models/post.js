const mongoose = require('mongoose')

const Schema = mongoose.Schema

// схема
const postSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true })

// модель принимает 1. имя модели, 2 имя схемы
const Post = mongoose.model('Post', postSchema)

module.exports = Post