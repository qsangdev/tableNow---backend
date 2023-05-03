const mongoose = require("mongoose");
const orderMenuSchema = new mongoose.Schema(
  {
    orderID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Order",
    },
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ProfileRestaurant",
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
    done: { type: Boolean, default: false },
    deliver: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const OrderMenu = mongoose.model("OrderMenu", orderMenuSchema);
module.exports = OrderMenu;
