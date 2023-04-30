const express = require("express");
const router = express.Router();
const orderMenuController = require("../controllers/OrderMenuController");

router.post("/create", orderMenuController.createOrder);
router.post("/update/:id", orderMenuController.updateOrder);
router.put("/update-status/:id", orderMenuController.updateStatusOrder);
router.get("/getAll", orderMenuController.getAllOrder);
router.get("/get/:id", orderMenuController.getResOrder);
router.get("/get-details/:id", orderMenuController.getDetailsOrder);
router.delete("/delete/:id", orderMenuController.deleteOrder);

module.exports = router;
