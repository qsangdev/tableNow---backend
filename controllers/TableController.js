const TableService = require("../services/TableSevice");

// const createTable = async (req, res) => {
//   try {
//     const { Tablename, restaurantID, active } = req.body;

//     if (!Tablename || !restaurantID) {
//       return res.status(200).json({
//         status: "ERR",
//         message: "The input is required",
//       });
//     }

//     const response = await TableService.createTable(req.body);
//     return res.status(200).json(response);
//   } catch (e) {
//     return res.status(404).json({
//       message: e,
//     });
//   }
// };

const updateTable = async (req, res) => {
  try {
    const tableId = req.params.id;
    const data = req.body;
    if (!tableId) {
      return res.status(200).json({
        status: "ERR",
        message: "The TableId is required",
      });
    }

    const response = await TableService.updateTable(tableId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteTable = async (req, res) => {
  try {
    const tableId = req.params.id;
    if (!tableId) {
      return res.status(200).json({
        status: "ERR",
        message: "The tableId is required",
      });
    }

    const response = await TableService.deleteTable(tableId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllTable = async (req, res) => {
  try {
    const response = await TableService.getAllTable();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsTable = async (req, res) => {
  try {
    const tableId = req.params.id;
    if (!tableId) {
      return res.status(200).json({
        status: "ERR",
        message: "The tableId is required",
      });
    }

    const response = await TableService.getDetailsTable(tableId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  // createTable,
  updateTable,
  deleteTable,
  getAllTable,
  getDetailsTable,
};
