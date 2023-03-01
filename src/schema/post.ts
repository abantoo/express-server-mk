import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  comments: {
    type: Array,
  },
  negativeMotivationCount: Number,
  positiveMotivationCount: Number,
  motivationCount: Number
}, {
  timestamps: true
});

export default postSchema;