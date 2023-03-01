import mongoose from "mongoose";
import postSchema from "../schema/post";

const Post = mongoose.model("Post", postSchema);

// TODO: create, getbyid and getallpost
export default class FeedModel {
  static async addMotivation(postCreationData: any): Promise<void> {
    await Post.create(postCreationData);
  }

  static async getAllMotivations(): Promise<unknown> {
    const result = await Post.find().lean().exec();
    return result;
  }
}

// module.exports = Post;
