const Staff = require("../models/StaffModel");

const createStaff = (newStaff) => {
  return new Promise(async (resolve, reject) => {
    const {
      restaurantID,
      staffSex,
      accountName,
      accountPassword,
      staffPhone,
      staffName,
      //   photo,
    } = newStaff;
    try {
      const checkStaff = await Staff.findOne({
        accountName: accountName,
      });
      if (checkStaff !== null) {
        resolve({
          status: "ERR",
          message: "The Staff is already",
        });
      }
      const createdStaff = await Staff.create({
        restaurantID,
        staffSex,
        accountName,
        accountPassword,
        staffPhone,
        staffName,
        // photo,
      });
      if (createdStaff) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdStaff,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateStaff = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkStaff = await Staff.findOne({
        _id: id,
      });
      if (checkStaff === null) {
        resolve({
          status: "ERR",
          message: "The Staff is not defined",
        });
      }

      const updateStaff = await Staff.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateStaff,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsStaff = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const profile = await Staff.findOne({
        _id: id,
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

const deleteStaff = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkStaff = await Staff.findOne({
        _id: id,
      });
      if (checkStaff === null) {
        resolve({
          status: "ERR",
          message: "The Staff is not defined",
        });
      }

      await Staff.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "DELETE SUCCESS",
        data: deleteStaff,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllStaff = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allStaff = await Staff.find();
      resolve({
        status: "OK",
        message: "GET_ALL SUCCESS",
        data: allStaff,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createStaff,
  updateStaff,
  getDetailsStaff,
  deleteStaff,
  getAllStaff,
};
