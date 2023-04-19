const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    restaurantName: { type: String, required: true },
    restaurantAddress: { type: String, required: true },
    restaurantTable: { type: Number, required: true },
    openTime: { type: String, required: true },
    closeTime: { type: String, required: true },
    restaurantDescribe: { type: String, required: true },
    images: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const ProfileRestaurant = mongoose.model("ProfileRestaurant", profileSchema);
module.exports = ProfileRestaurant;
