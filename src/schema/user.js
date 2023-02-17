import mongoose from"mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
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
    }, 
    websites: Array,
    followers: Number,
    following: Number,
    postCount: Number,
    bio: String,
    
    followers: [String],
    following: [String],
    // Probably link, will decide later
    avatar: String,

    firstname: String,
    lastname: String,

    role: String,
    perks: Array,
}, {
    timestamps: true
});

module.exports = userSchema;