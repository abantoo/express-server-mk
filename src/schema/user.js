import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    newUser: {
        type: Boolean,
        required: true
    },
    password: {
      type: String,
      required: true
    }
}, {
    timestamps: true
});

module.exports = userSchema;