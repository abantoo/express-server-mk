import mongoose from "mongoose";
import perkSchema from "../schema/perk";

const Perk = mongoose.model("Perk", perkSchema);

// export default class PerkModel {
//   static async addMotivation(postCreationData) {
//     Perk.create(postCreationData);
//   }
// }

module.exports = Perk;
