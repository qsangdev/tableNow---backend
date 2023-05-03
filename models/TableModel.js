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
        shift: Number,
        name: String,
        minPeople: Number,
        maxPeople: Number,
        status: [
          {
            orderID: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Order",
            },
            dateOrder: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
