const Table = require("../models/TableModel");

const createTable = (newTable) => {
  return new Promise(async (resolve, reject) => {
    const { restaurantID, tables } = newTable;
    try {
      const createdTable = await Table.create({
        restaurantID,
        tables,
      });
      if (createdTable) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdTable,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateTable = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateTable = await Table.findOneAndUpdate(
        { restaurantID: id },
        {
          $set: {
            tables: data,
          },
        },
        {
          new: true,
        }
      );

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateTable,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsTable = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const profile = await Table.findOne({
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

const deleteTable = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkTable = await Table.findOne({
        restaurantID: id,
      });
      if (checkTable === null) {
        resolve({
          status: "ERR",
          message: "The Table is not defined",
        });
      }

      const updateTable = await Table.updateOne(
        { restaurantID: id },
        {
          $pull: {
            tables: {
              name: data[0].name,
            },
          },
        }
      );
      resolve({
        status: "OK",
        message: "DELETE SUCCESS",
        data: updateTable,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllTable = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allTable = await Table.find();
      resolve({
        status: "OK",
        message: "GET_ALL SUCCESS",
        data: allTable,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const updateTableMM = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateTable = await Table.updateOne(
        { "tables.name": data[0].name },
        {
          $set: {
            "tables.$[e].minPeople": data[0].minPeople,
            "tables.$[e].maxPeople": data[0].maxPeople,
          },
        },
        {
          arrayFilters: [{ "e.name": data[0].name }],
          multi: true,
        }
      );

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateTable,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createTable,
  updateTable,
  getDetailsTable,
  deleteTable,
  getAllTable,
  updateTableMM,
};
