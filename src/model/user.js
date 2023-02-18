import mongoose from "mongoose"
import userSchema from"../schema/user"

const User = mongoose.model("User", userSchema);

module.exports = User;