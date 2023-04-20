const express = require("express");
const router = express.Router();
const billController = require("../controllers/BillController");

router.post("/create", billController.createBill);
router.delete("/delete/:id", billController.deleteBill);
router.get("/getAll", billController.getAllBill);
router.get("/get-details/:id", billController.getDetailsBill);

module.exports = router;
