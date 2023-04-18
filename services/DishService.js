const Dish = require("../models/DishModel");

const createDish = (newDish) => {
  return new Promise(async (resolve, reject) => {
    const {
      restaurantID,
      dishName,
      dishType,
      dishDescribe,
      dishImage,
      dishPrice,
      dishDiscount,
    } = newDish;
    try {
      const createdDish = await Dish.create({
        restaurantID,
        dishName,
        dishType,
        dishDescribe,
        dishImage,
        dishPrice,
        dishDiscount,
      });
      if (createdDish) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdDish,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateDish = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateDish = await Dish.findByIdAndUpdate(id, data, { new: true });

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateDish,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteDish = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Dish.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "DELETE SUCCESS",
        data: deleteDish,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllDish = (limit, page) => {
  // phan trang
  return new Promise(async (resolve, reject) => {
    try {
      const total = await Dish.find().count();
      const result = await Dish.find()
        .limit(limit)
        .skip((page - 1) * limit);

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: result,
        total: total,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(total / limit),
      });
      // const allDish = await Dish.find();
      // resolve({
      //   status: "OK",
      //   message: "GET_ALL SUCCESS",
      //   data: allDish,
      // });
    } catch (e) {
      reject(e);
    }
  });
};

const getResDish = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const profile = await Dish.find({
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

const getDetailsDish = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dish = await Dish.findById(id).populate("_id", "restaurantName");
      if (dish === null) {
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

const uploadImageDish = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateProfileRestaurant = await Dish.findByIdAndUpdate(
        id,
        { dishImage: data },
        {
          new: true,
        }
      );

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateProfileRestaurant,
      });
    } catch (e) {
      reject(e);
    }
  });
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
