const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ProfileRestaurant",
    },
    tableID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Table",
    },
    orderMenuID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderMenu",
    },
    guestName: { type: String, required: true },
    guestPhone: { type: String, required: true },
    dateOrder: { type: String, required: true },
    numberOfPeople: { type: Number, required: true },
    timeOrder: { type: String, required: true },
    tableName: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    cancelled: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
