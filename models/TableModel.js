const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema(
  {
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ProfileRestaurant",
    },
    tables: [
      {
        orderID: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Order",
        },
        shift: Number,
        name: String,
        minPeople: Number,
        maxPeople: Number,
        dateOrder: String,
        timeOrder: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
