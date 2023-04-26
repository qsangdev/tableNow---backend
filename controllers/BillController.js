const BillService = require("../services/BillService");

const createBill = async (req, res) => {
  try {
    const {
      tableID,
      staffID,
      paymentMethod,
      totalPay,
      restaurantID,
      orderID,
      orderList,
    } = req.body;
    if (
      !tableID ||
      !staffID ||
      !paymentMethod ||
      !totalPay ||
      !restaurantID ||
      !orderID ||
      !orderList
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await BillService.createBill(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteBill = async (req, res) => {
  try {
    const billId = req.params.id;
    if (!billId) {
      return res.status(200).json({
        status: "ERR",
        message: "The billId is required",
      });
    }

    const response = await BillService.deleteBill(billId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllBill = async (req, res) => {
  try {
    const response = await BillService.getAllBill();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsBill = async (req, res) => {
  try {
    const billId = req.params.id;
    if (!billId) {
      return res.status(200).json({
        status: "ERR",
        message: "The billId is required",
      });
    }

    const response = await BillService.getDetailsBill(billId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createBill,
  deleteBill,
  getAllBill,
  getDetailsBill,
};
