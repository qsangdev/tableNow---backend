const Staff = require("../models/StaffModel");
const bcrypt = require("bcrypt");

const createStaff = (newStaff) => {
  return new Promise(async (resolve, reject) => {
    const { staffName, staffSex, accountStaff, passwordStaff } = newStaff;
    try {
      const checkStaff = await Staff.findOne({
        accountStaff: accountStaff,
      });
      if (checkStaff !== null) {
        resolve({
          status: "ERR",
          message: "The Staff is already",
        });
      }

      const createdStaff = await Staff.create({
        staffName,
        staffSex,
        accountStaff,
        passwordStaff,
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

const loginStaff = (staffLogin) => {
  return new Promise(async (resolve, reject) => {
    const { staffName, staffSex, accountStaff, passwordStaff } = staffLogin;
    try {
      const checkStaff = await Staff.findOne({
        accountStaff: accountStaff,
        // email: email
      });
      if (checkStaff === null) {
        resolve({
          status: "ERR",
          message: "The Staff is not defined",
        });
      }
      const comparePassword = bcrypt.compareSync(
        passwordStaff,
        checkStaff.passwordStaff
      );

      if (!comparePassword) {
        resolve({
          status: "ERR",
          message: "The passwordStaff or accountStaff is not incorrect",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
      });
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
        message: "GET_ALL_STAFF SUCCESS",
        data: allStaff,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsStaff = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const staff = await Staff.findOne({
        _id: id,
      });
      if (staff === null) {
        resolve({
          status: "OK",
          message: "The staff is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: staff,
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
  deleteStaff,
  getAllStaff,
  getDetailsStaff,
};
