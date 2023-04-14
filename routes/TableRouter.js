const express = require("express");
const router = express.Router();
const tableController = require("../controllers/TableController");

router.get("/getAll", tableController.getAllTable);
router.post("/create", tableController.createTable);
router.put("/update/:id", tableController.updateTable);
router.get("/get-details/:id", tableController.getDetailsTable);

module.exports = router;
