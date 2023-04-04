const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    guestName: { type: String, required: true },
    guestPhone: { type: Number, required: true },
    dateOrder: { type: String, required: true },
    numberOfPeople: { type: Number, required: true },
    timeOrder: { type: String, required: true },
    tableName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;