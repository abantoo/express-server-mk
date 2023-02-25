import mongoose from "mongoose";
import postSchema from "../schema/post";

const Post = mongoose.model("Post", postSchema);

// TODO: create, getbyid and getallpost

module.exports = Post;
