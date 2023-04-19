const express = require("express");
const router = express.Router();
const dishController = require("../controllers/DishController");

router.post("/create-dish", dishController.createDish);
router.get("/getAll-dish", dishController.getAllDish);
router.put("/update-dish/:id", dishController.updateDish);
router.delete("/delete-dish/:id", dishController.deleteDish);
router.get("/get-details-dish/:id", dishController.getDetailsDish);

module.exports = router;
