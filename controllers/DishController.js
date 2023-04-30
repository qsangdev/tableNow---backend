const DishService = require("../services/DishService");

const createDish = async (req, res) => {
  try {
    const {
      restaurantID,
      dishName,
      dishType,
      dishDescribe,
      dishPrice,
      dishDiscount,
    } = req.body;

    if (
      !restaurantID ||
      !dishName ||
      !dishType ||
      !dishDescribe ||
      !dishPrice ||
      !dishDiscount
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await DishService.createDish(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateDish = async (req, res) => {
  try {
    const profileID = req.params.id;
    const data = req.body;
    if (!profileID) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileID is required",
      });
    }

    const response = await DishService.updateDish(profileID, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteDish = async (req, res) => {
  try {
    const profileID = req.params.id;
    if (!profileID) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileID is required",
      });
    }

    const response = await DishService.deleteDish(profileID);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllDish = async (req, res) => {
  try {
    const { limit, page } = req.query; // phan trang

    const response = await DishService.getAllDish(
      Number(limit) || null,
      Number(page) || 0
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getResDish = async (req, res) => {
  try {
    const profileID = req.params.id;
    if (!profileID) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileID is required",
      });
    }

    const response = await DishService.getResDish(profileID);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsDish = async (req, res) => {
  try {
    const profileID = req.params.id;
    if (!profileID) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileID is required",
      });
    }

    const response = await DishService.getDetailsDish(profileID);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const uploadImageDish = async (req, res) => {
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

    const response = await DishService.uploadImageDish(profileId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createDish,
  updateDish,
  deleteDish,
  getAllDish,
  getResDish,
  getDetailsDish,
  uploadImageDish,
};
