const express = require("express");
const router = express.Router();
const tableController = require("../controllers/TableController");

// router.post("/create-table", tableController.createTable);
router.put("/update-table/:id", tableController.updateTable);
router.delete("/delete-table/:id", tableController.deleteTable);
router.get("/getAll-table", tableController.getAllTable);
router.get("/get-details-table/:id", tableController.getDetailsTable);

module.exports = router;
