import mongoose from "mongoose"
import userSchema from"../schema/post"

const Post = mongoose.model("Post", postSchema);

module.exports = Post;