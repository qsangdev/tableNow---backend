const Staff = require("../models/StaffModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken } = require("./JwtService");
const { genneralRefreshToken } = require("./JwtService");

const createStaff = (newStaff) => {
  return new Promise(async (resolve, reject) => {
    const {
      restaurantID,
      staffSex,
      accountName,
      accountPassword,
      staffPhone,
      staffName,
      staffPhoto,
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
      const hash = bcrypt.hashSync(accountPassword, 10);
      const createdStaff = await Staff.create({
        restaurantID,
        staffSex,
        accountName,
        accountPassword: hash,
        staffPhone,
        staffName,
        staffPhoto,
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

const loginStaff = (StaffLogin) => {
  return new Promise(async (resolve, reject) => {
    const { accountName, accountPassword } = StaffLogin;
    try {
      const checkStaff = await Staff.findOne({
        accountName: accountName,
      });
      if (checkStaff === null) {
        resolve({
          status: "ERR",
          message: "The Staff is not defined",
        });
      }
      const comparePassword = bcrypt.compareSync(
        accountPassword,
        checkStaff.accountPassword
      );

      if (!comparePassword) {
        resolve({
          status: "ERR",
          message: "The password or Staff is not incorrect",
        });
      }
      const access_token = await genneralAccessToken({
        id: checkStaff.id,
        isAdmin: checkStaff.isAdmin,
      });

      const refresh_token = await genneralRefreshToken({
        id: checkStaff.id,
        isAdmin: checkStaff.isAdmin,
      });

      resolve({
        status: "OK",
        message: "SUCCESS",
        access_token,
        refresh_token,
        id: checkStaff._id,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const updateStaff = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
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

const getResStaff = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const profile = await Staff.find({
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

const uploadImageStaff = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateProfileRestaurant = await Staff.findByIdAndUpdate(
        id,
        { staffPhoto: data },
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
  createStaff,
  loginStaff,
  updateStaff,
  getDetailsStaff,
  deleteStaff,
  getAllStaff,
  getResStaff,
  uploadImageStaff
};
