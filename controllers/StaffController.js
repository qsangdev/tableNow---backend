const StaffService = require("../services/StaffService");

const createStaff = async (req, res) => {
  try {
    const {
      restaurantID,
      staffSex,
      accountName,
      accountPassword,
      staffPhone,
      staffName,
    } = req.body;

    if (
      !restaurantID ||
      !staffSex ||
      !accountName ||
      !accountPassword ||
      !staffPhone ||
      !staffName
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await StaffService.createStaff(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      message: e.message,
    });
  }
};

const updateStaff = async (req, res) => {
  try {
    const profileId = req.params.id;
    const data = req.body;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }

    const response = await StaffService.updateStaff(profileId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsStaff = async (req, res) => {
  try {
    const profileId = req.params.id;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }

    const response = await StaffService.getDetailsStaff(profileId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteStaff = async (req, res) => {
  try {
    const profileId = req.params.id;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }

    const response = await StaffService.deleteStaff(profileId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllStaff = async (req, res) => {
  try {
    const response = await StaffService.getAllStaff();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createStaff,
  updateStaff,
  getDetailsStaff,
  deleteStaff,
  getAllStaff,
};
