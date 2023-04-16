const mongoose = require("mongoose");
const dishSchema = new mongoose.Schema(
  {
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ProfileRestaurant",
    },
    dishName: { type: String, required: true },
    dishType: { type: String, required: true },
    dishDescribe: { type: String, required: true },
    dishImage: [{ type: String, required: true }],
    dishPrice: { type: Number, required: true },
    dishDiscount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;
