const ProfileRestaurantService = require("../services/ProfileRestaurantService");
const cloudinary = require("cloudinary").v2;

const createProfileRestaurant = async (req, res) => {
  try {
    const {
      restaurantID,
      // restaurantName,
      // restaurantAddress,
      // restaurantTable,
      // openTime,
      // closeTime,
      // restaurantDescribe,
    } = req.body;

    if (
      !restaurantID

      // !restaurantName ||
      // !restaurantAddress ||
      // !restaurantTable ||
      // !openTime ||
      // !closeTime ||
      // !restaurantDescribe
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await ProfileRestaurantService.createProfileRestaurant(
      req.body
    );
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      message: e.message,
    });
  }
};

const updateProfileRestaurant = async (req, res) => {
  try {
    const profileId = req.params.id;
    const data = req.body;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }
    const response = await ProfileRestaurantService.updateProfileRestaurant(
      profileId,
      data
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const uploadImageRestaurant = async (req, res) => {
  try {
    const profileId = req.params.id;
    const fileData = req.file;
    const data = fileData?.path;
    if (!fileData) {
      return res.status(200).json({
        status: "ERR",
        message: "Missing image",
      });
    }

    const response = await ProfileRestaurantService.uploadImageRestaurant(
      profileId,
      data
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsProfileRestaurant = async (req, res) => {
  try {
    const profileId = req.params.id;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }

    const response = await ProfileRestaurantService.getDetailsProfileRestaurant(
      profileId
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteProfileRestaurant = async (req, res) => {
  try {
    const profileId = req.params.id;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }

    const response = await ProfileRestaurantService.deleteProfileRestaurant(
      profileId
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteImageRestaurant = async (req, res) => {
  try {
    const profileId = req.params.id;
    const data = req.body.images;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }
    const response = await ProfileRestaurantService.deleteImageRestaurant(
      profileId,
      data
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllProfileRestaurant = async (req, res) => {
  try {
    const { limit, page, ...filter } = req.query; // phan trang + tim kiem
    const response = await ProfileRestaurantService.getAllProfileRestaurant(
      Number(limit) || null,
      Number(page) || 0,
      filter
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createProfileRestaurant,
  updateProfileRestaurant,
  getDetailsProfileRestaurant,
  deleteProfileRestaurant,
  getAllProfileRestaurant,
  uploadImageRestaurant,
  deleteImageRestaurant,
};
