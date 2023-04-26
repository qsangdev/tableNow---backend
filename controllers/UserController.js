const UserService = require("../services/UserService");
// const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  try {
    const { Username, email, password, confirmPassword, phone, code } =
      req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const isCheckEmail = reg.test(email);
    if (
      !Username ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !code
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "Invalid email",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is equal confirmPassword",
      });
    } else if (phone.match(regexPhoneNumber) === null) {
      return res.status(200).json({
        status: "ERR",
        message: "Invalid phone number",
      });
    } else if (code !== "mindx") {
      return res.status(200).json({
        status: "ERR",
        message: "The security code is incorrect",
      });
    }

    const response = await UserService.createUser(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { Username, password } = req.body;

    if (!Username || !password) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    } else {
      const response = await UserService.loginUser(req.body);

      // const accessTokene = jwt.sign(
      //   {
      //     id: User.id,
      //     isAdmin: isAdmin,
      //   },
      //   process.env.ACCESS_TOKEN,
      //   { expiresIn: "365d" }
      // );

      return res.status(200).json(response);
    }
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }

    const response = await UserService.updateUser(userId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }

    const response = await UserService.deleteUser(userId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const response = await UserService.getAllUser();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }

    const response = await UserService.getDetailsUser(userId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
};
