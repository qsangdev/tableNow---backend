const express = require("express");
const router = express.Router();
const dishController = require("../controllers/DishController");
const uploadCloud = require("../services/CloudinaryConfig");

router.post("/create", dishController.createDish);
router.put("/update/:id", dishController.updateDish);
router.delete("/delete/:id", dishController.deleteDish);
router.get("/getAll", dishController.getAllDish);
router.get("/get/:id", dishController.getResDish);
router.get("/get-details/:id", dishController.getDetailsDish);
router.post(
  "/upload/:id",
  uploadCloud.single("dishImage"),
  dishController.uploadImageDish
);

module.exports = router;
module.exports = router;
