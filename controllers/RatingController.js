const RatingService = require("../services/RatingService");

const createRating = async (req, res) => {
  try {
    const response = await RatingService.createRating(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      message: e.message,
    });
  }
};

const getAllRating = async (req, res) => {
  try {
    const response = await RatingService.getAllRating();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsRating = async (req, res) => {
  try {
    const RatingId = req.params.id;

    const response = await RatingService.getDetailsRating(RatingId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createRating,
  getDetailsRating,
  getAllRating,
};
