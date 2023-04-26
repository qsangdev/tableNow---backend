const OrderMenuService = require("../services/OrderMenuService");

const createOrder = async (req, res) => {
  try {
    const { orderID } = req.body;
    if (!orderID) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await OrderMenuService.createOrder(req.body);
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
    const data = req.body.ordered;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }
    const response = await OrderMenuService.updateOrder(profileId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllOrder = async (req, res) => {
  try {
    const response = await OrderMenuService.getAllOrder();
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

    const response = await OrderMenuService.getDetailsOrder(orderId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderID = req.params.id;
    if (!orderID) {
      return res.status(200).json({
        status: "ERR",
        message: "The orderID is required",
      });
    }

    const response = await OrderMenuService.deleteOrder(orderID);
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
  deleteOrder
};
