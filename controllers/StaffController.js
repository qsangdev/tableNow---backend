const StaffService = require("../services/StaffService");

const createStaff = async (req, res) => {
  try {
    const {
      restaurantID,
      staffSex,
      accountName,
      accountPassword,
      confirmPassword,
      staffPhone,
      staffName,
    } = req.body;

    if (
      !restaurantID ||
      !staffSex ||
      !accountName ||
      !accountPassword ||
      !confirmPassword ||
      !staffPhone ||
      !staffName
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (staffPhone.match(regexPhoneNumber) === null) {
      return res.status(200).json({
        status: "ERR",
        message: "Invalid phone number",
      });
    } else if (accountPassword !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is equal confirmPassword",
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

const loginStaff = async (req, res) => {
  try {
    const { accountName, accountPassword } = req.body;

    if (!accountName || !accountPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    } else {
      const response = await StaffService.loginStaff(req.body);
      return res.status(200).json(response);
    }
  } catch (e) {
    return res.status(404).json({
      message: e,
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
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (data.staffPhone.match(regexPhoneNumber) === null) {
      return res.status(200).json({
        status: "ERR",
        message: "Invalid phone number",
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

const getResStaff = async (req, res) => {
  try {
    const profileId = req.params.id;
    if (!profileId) {
      return res.status(200).json({
        status: "ERR",
        message: "The profileId is required",
      });
    }

    const response = await StaffService.getResStaff(profileId);
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

const uploadImageStaff = async (req, res) => {
  try {
    const profileId = req.params.id;
    const fileData = req.file;
    const data = fileData?.path;
    if (!fileData) {
      return res.status(200).json({
        status: "ERR",
        message: "Missing image",
      });
    }

    const response = await StaffService.uploadImageStaff(
      profileId,
      data
    );
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
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
