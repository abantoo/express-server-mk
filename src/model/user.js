import mongoose from "mongoose"
import userSchema from"../schema/user"

const User = mongoose.model("User", userSchema);

// TODO: create and retrieve user

module.exports = User;