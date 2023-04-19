const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema(
  {
    // restaurantID: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "ProfileRestaurant",
    // },

    tableName: { type: String, required: true },
    active: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
