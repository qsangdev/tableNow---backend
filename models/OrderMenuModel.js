const mongoose = require("mongoose");
const orderMenuSchema = new mongoose.Schema(
  {
    orderID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Order",
    },
    ordered: [
      {
        dishID: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Order",
        },
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const OrderMenu = mongoose.model("OrderMenu", orderMenuSchema);
module.exports = OrderMenu;
