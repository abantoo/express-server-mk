import mongoose from "mongoose"
import postSchema from"../schema/post"

const Post = mongoose.model("Post", postSchema);

module.exports = Post;