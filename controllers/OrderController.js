const OrderService = require("../services/OrderService");

const createOrder = async (req, res) => {
  try {
    const {
      restaurantID,
      tableID,
      guestName,
      guestPhone,
      dateOrder,
      numberOfPeople,
      timeOrder,
      tableName,
    } = req.body;
    if (
      !restaurantID ||
      !tableID ||
      !guestName ||
      !guestPhone ||
      !dateOrder ||
      !numberOfPeople ||
      !timeOrder ||
      !tableName
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await OrderService.createOrder(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateOrder = async (req, res) => {
  try {
    const profileId = req.params.id;
    const data = req.body;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }
    const response = await OrderService.updateOrder(
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

const getAllOrder = async (req, res) => {
  try {
    const response = await OrderService.getAllOrder();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    if (!orderId) {
      return res.status(200).json({
        status: "ERR",
        message: "The orderId is required",
      });
    }

    const response = await OrderService.getDetailsOrder(orderId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createOrder,
  updateOrder,
  getAllOrder,
  getDetailsOrder,
};
