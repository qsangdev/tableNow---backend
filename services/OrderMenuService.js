const OrderMenu = require("../models/OrderMenuModel");

const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    const { orderID, ordered, restaurantID, done } = newOrder;
    try {
      const createdOrder = await OrderMenu.create({
        orderID,
        ordered,
        restaurantID,
        done,
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
      const updateOrder = await OrderMenu.findOneAndUpdate(
        { orderID: id },
        {
          $push: {
            ordered: data,
          },
        },
        {
          new: true,
        }
      );

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

const updateStatusOrder = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateOrder = await OrderMenu.findByIdAndUpdate(id, data, {
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
      const allOrder = await OrderMenu.find();
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
      const order = await OrderMenu.find({
        orderID: id,
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

const deleteOrder = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkOrder = await OrderMenu.findOne({
        _id: id,
      });
      if (checkOrder === null) {
        resolve({
          status: "ERR",
          message: "The Order is not defined",
        });
      }

      await OrderMenu.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "DELETE SUCCESS",
        data: deleteOrder,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getResOrder = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const profile = await OrderMenu.find({
        restaurantID: id,
      });
      if (profile === null) {
        resolve({
          status: "ERR",
          message: "The profile is not defined",
        });
      }

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
  createOrder,
  updateOrder,
  updateStatusOrder,
  getAllOrder,
  getDetailsOrder,
  deleteOrder,
  getResOrder,
};
