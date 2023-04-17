const express = require("express");
const router = express.Router();
const staffController = require("../controllers/StaffController");
const uploadCloud = require("../services/CloudinaryConfig");

router.get("/getAll", staffController.getAllStaff);
router.post("/create", staffController.createStaff);
router.post("/log-in", staffController.loginStaff);
router.put("/update/:id", staffController.updateStaff);
router.get("/get-staff/:id", staffController.getResStaff);
router.get("/get-details/:id", staffController.getDetailsStaff);
router.delete("/delete/:id", staffController.deleteStaff);
router.post(
  "/upload/:id",
  uploadCloud.single("staffPhoto"),
  staffController.uploadImageStaff
);

module.exports = router;
