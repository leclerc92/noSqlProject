const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    recipeId: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);