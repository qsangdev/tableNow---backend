const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");

router.post("/create-order", orderController.createOrder);
router.delete("/delete-order/:id", orderController.deleteOrder);
router.get("/getAll-order", orderController.getAllOrder);
router.get("/get-details-order/:id", orderController.getDetailsOrder);

module.exports = router;
