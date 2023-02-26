import mongoose from "mongoose";
import perkSchema from "../schema/perk";

const Perk = mongoose.model("Perk", perkSchema);

export default class PerkModel {
  static async addMotivation(postCreationData) {
    await Perk.create(postCreationData);
  }

  static async getAllMotivations() {
    const result = await Perk.find().lean().exec();
    return result;
  }
}

module.exports = Perk;
