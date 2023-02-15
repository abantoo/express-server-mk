import mongoose from "mongoose"
import userSchema from"../schema/user"

const Feedback = mongoose.model("User", userSchema);

module.exports = Feedback;