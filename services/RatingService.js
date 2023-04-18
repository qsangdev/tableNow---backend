const Rating = require("../models/RatingModel");

const createRating = (newRating) => {
  return new Promise(async (resolve, reject) => {
    const { restaurantID, ratingName, ratingStar, ratingComment } = newRating;
    try {
      const createdRating = await Rating.create({
        restaurantID,
        ratingName,
        ratingStar,
        ratingComment,
      });

      if (createdRating) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdRating,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const getAllRating = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allRating = await Rating.find();

      resolve({
        status: "OK",
        message: "GET_ALL SUCCESS",
        data: allRating,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsRating = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const profile = await Rating.find({
        restaurantID: id,
      });

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: profile,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createRating,
  getDetailsRating,
  getAllRating,
};
