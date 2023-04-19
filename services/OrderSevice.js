const Order = require("../models/OrderModel");

const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    const {
      guestName,
      guestPhone,
      dateOrder,
      numberOfPeople,
      timeOrder,
      tableName,
    } = newOrder;
    try {
      const checkOrder = await Order.findOne({
        guestName: guestName,
        guestPhone: guestPhone,
        timeOrder: timeOrder,
      });
      if (checkOrder !== null) {
        resolve({
          status: "ERR",
          message: "The order is already",
        });
      }

      const createdOrder = await Order.create({
        guestName,
        guestPhone,
        dateOrder,
        numberOfPeople,
        timeOrder,
        tableName,
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

// const updateOrder = (id, data) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const checkOrder = await Order.findOne({
//         _id: id,
//       });
//       if (checkOrder === null) {
//         resolve({
//           status: "ERR",
//           message: "The Order is not defined",
//         });
//       }

//       const updatedOrder = await Order.findByIdAndUpdate(id, data, {
//         new: true,
//       });

//       resolve({
//         status: "OK",
//         message: "SUCCESS",
//         data: updateOrder,
//       });
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

const deleteOrder = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkOrder = await Order.findOne({
        _id: id,
      });
      if (checkOrder === null) {
        resolve({
          status: "ERR",
          message: "The Order is not defined",
        });
      }

      await Order.findByIdAndDelete(id);

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
      const order = await Order.findOne({
        _id: id,
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
  deleteOrder,
  getAllOrder,
  getDetailsOrder,
};
