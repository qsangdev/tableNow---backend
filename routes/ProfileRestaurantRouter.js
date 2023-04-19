const express = require("express");
const router = express.Router();
const ProfileRestaurantController = require("../controllers/ProfileRestaurantController");
const uploadCloud = require("../services/CloudinaryConfig");

router.post("/create", ProfileRestaurantController.createProfileRestaurant);
router.post(
  "/upload/:id",
  uploadCloud.single("images"),
  ProfileRestaurantController.uploadImageRestaurant
);
router.post(
  "/delete-image/:id",
  ProfileRestaurantController.deleteImageRestaurant
);
router.put("/update/:id", ProfileRestaurantController.updateProfileRestaurant);
router.get(
  "/get-details/:id",
  ProfileRestaurantController.getDetailsProfileRestaurant
);
router.get("/getAll", ProfileRestaurantController.getAllProfileRestaurant);
router.delete(
  "/delete-restaurant/:id",
  ProfileRestaurantController.deleteProfileRestaurant
);

module.exports = router;
