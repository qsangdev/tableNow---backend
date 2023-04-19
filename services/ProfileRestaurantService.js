const ProfileRestaurant = require("../models/ProfileRestaurantModel");

const createProfileRestaurant = (newProfileRestaurant) => {
  return new Promise(async (resolve, reject) => {
    const {
      restaurantID,
      restaurantName,
      restaurantAddress,
      restaurantTable,
      restaurantDescribe,
      shiftTime,
      images,
      active,
      rating,
      maxDiscount,
      latitude,
      longitude,
    } = newProfileRestaurant;
    try {
      const createdProfileRestaurant = await ProfileRestaurant.create({
        restaurantID,
        restaurantName,
        restaurantAddress,
        restaurantTable,
        restaurantDescribe,
        shiftTime,
        images,
        active,
        rating,
        maxDiscount,
        latitude,
        longitude,
      });
      if (createdProfileRestaurant) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdProfileRestaurant,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateProfileRestaurant = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateProfileRestaurant = await ProfileRestaurant.findByIdAndUpdate(
        id,
        data,
        { new: true }
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

const updateTimeRestaurant = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateProfileRestaurant = await ProfileRestaurant.updateOne(
        { _id: id, "shiftTime.shift": data[0].shift },
        {
          $set: {
            "shiftTime.$.timeStart": data[0].timeStart,
            "shiftTime.$.timeEnd": data[0].timeEnd,
          },
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

const uploadImageRestaurant = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateProfileRestaurant = await ProfileRestaurant.findOneAndUpdate(
        { restaurantID: id },
        { $push: { images: data } },
        { new: true }
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

const getDetailsProfileRestaurant = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const profile = await ProfileRestaurant.findOne({
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

const deleteProfileRestaurant = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProfileRestaurant = await ProfileRestaurant.findOne({
        restaurantID: id,
      });
      if (checkProfileRestaurant === null) {
        resolve({
          status: "ERR",
          message: "The ProfileRestaurant is not defined",
        });
      }

      await ProfileRestaurant.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "DELETE SUCCESS",
        data: deleteProfileRestaurant,
      });
    } catch (e) {
      reject(e);
    }
  });
};


  return new Promise(async (resolve, reject) => {
    try {
      const updateProfileRestaurant = await ProfileRestaurant.updateOne(
        { restaurantID: id },
        {
          $pull: {
            images: data,
          },
        }
      );

      resolve({
        status: "OK",
        message: "DELETE SUCCESS",
        data: updateProfileRestaurant,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllProfileRestaurant = (limit, page, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      const conditions = {};
      if (filter?.restaurantName)
        conditions.restaurantName = new RegExp(filter.restaurantName, "i"); // tìm gần đúng và không phân biệt hoa thường
      if (filter?.restaurantAddress)
        conditions.restaurantAddress = new RegExp(
          filter.restaurantAddress,
          "i"
        );

      const total = await ProfileRestaurant.find(conditions).count(); // phan trang
      const result = await ProfileRestaurant.find(conditions)
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

      // const totalProfile = await ProfileRestaurant.count();
      // if (filter) {
      //   const allObjectFilter = await ProfileRestaurant.find({
      //     restaurantName: /HN1/i,
      //   })
      //     .limit(limit)
      //     .skip((page - 1) * limit);

      //   resolve({
      //     status: "OK",
      //     message: "SUCCESS",
      //     data: allObjectFilter,
      //     total: totalProfile,
      //     pageCurrent: Number(page + 1),
      //     totalPage: Math.ceil(totalProfile / limit),
      //   });
      // }
      // const allProfile = await ProfileRestaurant.find()
      //   .limit(limit)
      //   .skip(page * limit);
      // resolve({
      //   status: "OK",
      //   message: "GET_ALL SUCCESS",
      //   data: allProfile,
      //   total: totalProfile,
      //   pageCurrent: Number(page + 1),
      //   totalPage: Math.ceil(totalProfile / limit),
      // });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createProfileRestaurant,
  updateProfileRestaurant,
  getDetailsProfileRestaurant,
  deleteProfileRestaurant,
  getAllProfileRestaurant,
  uploadImageRestaurant,
  deleteImageRestaurant,
  updateTimeRestaurant,
};
