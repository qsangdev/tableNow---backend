const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema(
  {
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ProfileRestaurant",
    },
    staffName: { type: String, required: true },
    staffPhone: { type: String, required: true },
    staffSex: { type: String, required: true },
    accountName: { type: String, required: true },
    accountPassword: { type: String, required: true },
    staffPhoto: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;
