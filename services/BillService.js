const Bill = require("../models/BillModel");

const createBill = (newBill) => {
  return new Promise(async (resolve, reject) => {
    const {
      tableID,
      staffID,
      paymentMethod,
      totalPay,
      restaurantID,
      orderID,
      orderList,
    } = newBill;
    try {
      const checkBill = await Bill.findOne({
        tableID: tableID,
        restaurantID: restaurantID,
        orderID: orderID,
      });
      if (checkBill !== null) {
        resolve({
          status: "ERR",
          message: "The bill is already",
        });
      }
      const createdBill = await Bill.create({
        tableID,
        staffID,
        paymentMethod,
        totalPay,
        restaurantID,
        orderID,
        orderList,
      });
      if (createdBill) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdBill,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const deleteBill = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkBill = await Bill.findOne({
        _id: id,
      });
      if (checkBill === null) {
        resolve({
          status: "ERR",
          message: "The Bill is not defined",
        });
      }

      await Bill.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "DELETE SUCCESS",
        data: deleteBill,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllBill = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allBill = await Bill.find();
      resolve({
        status: "OK",
        message: "GET_ALL SUCCESS",
        data: allBill,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsBill = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const bill = await Bill.findOne({
        _id: id,
      });
      if (bill === null) {
        resolve({
          status: "ERR",
          message: "The Bill is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: bill,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createBill,
  deleteBill,
  getAllBill,
  getDetailsBill,
};
