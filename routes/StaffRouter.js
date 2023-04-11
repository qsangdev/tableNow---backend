const express = require("express");
const router = express.Router();
const staffController = require("../controllers/StaffController");

router.get("/getAll", staffController.getAllStaff);
router.post("/create", staffController.createStaff);
router.put("/update/:id", staffController.updateStaff);
router.get("/get-details/:id", staffController.getDetailsStaff);
router.delete("/delete-staff/:id", staffController.deleteStaff);

module.exports = router;

module.exports = router