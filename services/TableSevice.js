const Table = require("../models/TableModel");

// const createTable = (newTable) => {
//   return new Promise(async (resolve, reject) => {
//     const { Tablename } = newTable;
//     try {
//       const checkTable = await Table.findOne({
//         Tablename: Tablename,
//       });
//       if (checkTable !== null) {
//         resolve({
//           status: "ERR",
//           message: "The table is already",
//         });
//       }

//       const createdTable = await Table.create({
//         Tablename,
//       });
//       if (createdTable) {
//         resolve({
//           status: "OK",
//           message: "SUCCESS",
//           data: createdTable,
//         });
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

const updateTable = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkTable = await Table.findOne({
        _id: id,
      });
      if (checkTable === null) {
        resolve({
          status: "ERR",
          message: "The table is not defined",
        });
      }

      const updatedTable = await Table.findByIdAndUpdate(id, data, {
        new: true,
      });

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

const deleteTable = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkTable = await Table.findOne({
        _id: id,
      });
      if (checkTable === null) {
        resolve({
          status: "ERR",
          message: "The Table is not defined",
        });
      }

      await Table.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "DELETE SUCCESS",
        data: deleteTable,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllTable = () => {
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

const getDetailsTable = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const table = await Table.findOne({
        _id: id,
      });
      if (table === null) {
        resolve({
          status: "ERR",
          message: "The Table is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: table,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  // createTable,
  updateTable,
  deleteTable,
  getAllTable,
  getDetailsTable,
};
