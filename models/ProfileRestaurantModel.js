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
    shiftTime: [{ shift: Number, timeStart: String, timeEnd: String }],
    restaurantDescribe: { type: String, required: true },
    images: [{ type: String, required: true }],
    active: { type: Boolean, require: true, default: false },
    rating: { type: Number },
    maxDiscount: { type: Number },
  },
  {
    timestamps: true,
  }
);

const ProfileRestaurant = mongoose.model("ProfileRestaurant", profileSchema);
module.exports = ProfileRestaurant;
