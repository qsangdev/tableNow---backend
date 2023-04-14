const TableService = require("../services/TableService");

const createTable = async (req, res) => {
  try {
    const response = await TableService.createTable(req.body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      message: e.message,
    });
  }
};

const updateTable = async (req, res) => {
  try {
    const tableId = req.params.id;
    const data = req.body;
    if (!tableId) {
      return res.status(200).json({
        status: "ERR",
        message: "The tableId is required",
      });
    }
    if (!data) {
      return res.status(200).json({
        status: "ERR",
        message: "Input is required",
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

module.exports = {
  createTable,
  updateTable,
  getDetailsTable,
  getAllTable,
};
