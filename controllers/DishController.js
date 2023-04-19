const DishService = require("../services/DishService");

const createDish = async (req, res) => {
  try {
    const {
      dishName,
      dishType,
      dishDescribe,
      dishImage,
      dishQuantity,
      dishPrice,
      dishDiscount,
    } = req.body;

    if (
      !dishName ||
      !dishType ||
      !dishDescribe ||
      !dishImage ||
      !dishQuantity ||
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
    const dishId = req.params.id;
    const data = req.body;
    if (!dishId) {
      return res.status(200).json({
        status: "ERR",
        message: "The dishId is required",
      });
    }

    const response = await DishService.updateDish(dishId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteDish = async (req, res) => {
  try {
    const dishId = req.params.id;
    if (!dishId) {
      return res.status(200).json({
        status: "ERR",
        message: "The dishId is required",
      });
    }

    const response = await DishService.deleteDish(dishId);
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

const getDetailsDish = async (req, res) => {
  try {
    const dishId = req.params.id;

    if (!dishId) {
      return res.status(200).json({
        status: "ERR",
        message: "The dishId is required",
      });
    }

    const response = await DishService.getDetailsDish(dishId);
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
  getDetailsDish,
};
