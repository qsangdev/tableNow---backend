const mongoose = require("mongoose");
const RatingSchema = new mongoose.Schema(
  {
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ProfileRestaurant",
    },
    ratingName: { type: String, required: true },
    ratingStar: { type: Number, required: true },
    ratingComment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("Rating", RatingSchema);
module.exports = Rating;
