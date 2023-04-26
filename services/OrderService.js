const Order = require("../models/OrderModel");

const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    const {
      restaurantID,
      guestName,
      guestPhone,
      dateOrder,
      numberOfPeople,
      timeOrder,
      tableName,
      completed,
      cancelled,
    } = newOrder;
    try {
      const checkOrder = await Order.findOne({
        guestName: guestName,
        guestPhone: guestPhone,
        timeOrder: timeOrder,
        tableName: tableName,
        cancelled: false,
      });
      if (checkOrder !== null) {
        return resolve({
          status: "ERR",
          message: "The order is already",
        });
      }

      const createdOrder = await Order.create({
        restaurantID,
        guestName,
        guestPhone,
        dateOrder,
        numberOfPeople,
        timeOrder,
        tableName,
        completed,
        cancelled,
      });
      if (createdOrder) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdOrder,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateOrder = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateOrder = await Order.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateOrder,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllOrder = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allOrder = await Order.find();
      resolve({
        status: "OK",
        message: "GET_ALL SUCCESS",
        data: allOrder,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsOrder = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.find({
        restaurantID: id,
      });
      if (order === null) {
        resolve({
          status: "ERR",
          message: "The Order is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: order,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createOrder,
  updateOrder,
  getAllOrder,
  getDetailsOrder,
};
