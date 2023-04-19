const express = require("express");
const router = express.Router();
const billController = require("../controllers/BillController");

router.post("/create-bill", billController.createBill);
router.delete("/delete-bill/:id", billController.deleteBill);
router.get("/getAll-bill", billController.getAllBill);
router.get("/get-details-bill/:id", billController.getDetailsBill);

module.exports = router;
