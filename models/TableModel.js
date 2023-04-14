const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema(
  {
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    tables: [
      {
        shift: Number,
        name: String,
        status: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
