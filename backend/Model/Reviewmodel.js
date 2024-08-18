// models/review.js

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: { type: Boolean, default: 1 },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
