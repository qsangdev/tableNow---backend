const mongoose = require("mongoose");
const dishSchema = new mongoose.Schema(
  {
    dishName: { type: String, required: true },
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProfileRestaurant",
    },
    dishType: { type: String, required: true },
    dishDescribe: { type: String, required: true },
    dishImage: { type: String, required: true },
    dishQuantity: { type: Number, required: true },
    dishPrice: { type: Number, required: true },
    dishDiscount: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;