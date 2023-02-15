import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    userId: {
      type: String,
      required: true
    }
}, {
    timestamps: true
});

module.exports = postSchema;