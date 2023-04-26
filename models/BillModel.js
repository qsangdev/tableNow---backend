const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    tableID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Table",
    },
    staffID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Staff",
    },
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ProfileRestaurant",
    },
    orderID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Order",
    },
    orderList: [
      {
        _id: mongoose.Schema.Types.ObjectId,
        dishDiscount: Number,
        dishID: mongoose.Schema.Types.ObjectId,
        dishName: String,
        dishPrice: Number,
        quantity: Number,
        total: Number,
      },
    ],
    paymentMethod: { type: String, require: true },
    totalPay: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
