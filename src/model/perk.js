import mongoose from "mongoose"
import perkSchema from"../schema/perk"

const Perk = mongoose.model("Perk", perkSchema);

module.exports = Perk;