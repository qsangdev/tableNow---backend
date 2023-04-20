const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");

router.post("/create", orderController.createOrder);
router.put("/update/:id", orderController.updateOrder);
router.get("/getAll", orderController.getAllOrder);
router.get("/get-details/:id", orderController.getDetailsOrder);

module.exports = router;
